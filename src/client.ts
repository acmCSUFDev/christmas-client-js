import { LEDClientMessage, LEDServerMessage } from "./christmaspb/christmas.js";
import { Emitter } from "strict-event-emitter";
import WebSocket from "isomorphic-ws";

export type CloseEvent = {
  reason: string;
};

export type Events = {
  open: [void];
  close: [CloseEvent];
  message: [LEDServerMessage];
};

type WSCloseEvent = {
  code: number;
  reason: string | Buffer;
};

export class Client extends Emitter<Events> {
  private ws: WebSocket | null;
  private openPromise: Promise<void> = Promise.resolve();

  constructor(public readonly url: string) {
    super();
    this.ws = null;
  }

  // connect connects to the server and authenticates with the given secret.
  // It blocks until the connection is established.
  async connect(secret: string) {
    const authedEventPromise = this.nextMessage();

    this.init();
    await this.openPromise;

    this.send({ authenticate: { secret } });

    const authedEvent = await authedEventPromise;
    if (!authedEvent.authenticate?.success) {
      throw new Error("authentication failed");
    }
  }

  close(graceful: boolean = true) {
    if (this.ws) this.ws.close(graceful ? 1000 : 1001);
  }

  send(message: LEDClientMessage) {
    if (!this.ws) throw new Error("websocket is closed");
    this.ws.send(LEDClientMessage.encode(message).finish());
  }

  async nextMessage(
    types?: keyof LEDServerMessage | keyof LEDServerMessage[],
  ): Promise<LEDServerMessage> {
    let isMatch: (ev: LEDServerMessage) => boolean;
    if (types) {
      if (Array.isArray(types)) {
        isMatch = (ev) =>
          (types as (keyof LEDServerMessage)[]).some((type) => !!ev[type]);
      } else {
        isMatch = (ev) => !!ev[types as keyof LEDServerMessage];
      }
    }

    return new Promise((resolve, reject) => {
      const onMessage = (ev: LEDServerMessage) => {
        if (!isMatch || isMatch(ev)) {
          unbind();
          resolve(ev);
        }
      };
      const onClose = (ev: CloseEvent) => {
        unbind();
        reject(new Error(`session closed: ${ev.reason}`));
      };
      const unbind = () => {
        this.removeListener("message", onMessage);
        this.removeListener("close", onClose);
      };
      this.addListener("message", onMessage);
      this.addListener("close", onClose);
    });
  }

  async *messages(): AsyncGenerator<LEDServerMessage> {
    while (true) {
      yield await this.nextMessage();
    }
  }

  private init() {
    if (this.ws) return;

    console.log("connecting to websocket...");

    const ws = new WebSocket(this.url);
    this.ws = ws;
    this.ws.addListener("open", this.onOpen.bind(this));
    this.ws.addListener("close", this.onClose.bind(this));
    this.ws.addListener("message", this.onMessage.bind(this));

    this.openPromise = new Promise((resolve, reject) => {
      if (!ws) {
        throw "ws should not be null";
      }
      ws.addListener("open", () => {
        resolve();
      });
      ws.addListener("close", (ev: WSCloseEvent) => {
        const reason = maybeBufferToString(ev.reason);
        reject(new Error(`closed (code ${ev.code}): ${reason}`));
      });
      ws.addListener("error", (ev: { error: Error }) => {
        reject(new Error(`websocket connection error: server unreachable`));
      });
    });
  }

  private async onOpen() {
    this.emit("open");
  }

  private async onClose(ev: WSCloseEvent) {
    const reason = maybeBufferToString(ev.reason);
    this.emit("close", { reason });
    this.ws = null;
  }

  private async onMessage(event: { data: ArrayBuffer }) {
    const data = LEDServerMessage.decode(new Uint8Array(event.data));
    this.emit("message", data);
  }
}

function maybeBufferToString(buf: Buffer | string): string {
  if (buf instanceof Buffer) {
    return buf.toString();
  }
  return buf;
}
