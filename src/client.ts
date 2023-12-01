import { LEDClientMessage, LEDServerMessage } from "./christmaspb/christmas.js";
import { Emitter } from "strict-event-emitter";
import WebSocket from "ws";

export type CloseEvent = {
  reason: string;
};

export type Events = {
  open: [void];
  close: [CloseEvent];
  message: [LEDServerMessage];
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
  async connect() {
    this.init();
    await this.openPromise;
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

    const ws = new WebSocket(this.url);
    this.ws = ws;

    ws.addEventListener("open", () => {
      this.emit("open");
    });

    ws.addEventListener("close", (ev) => {
      const reason = maybeBufferToString(ev.reason);
      this.emit("close", { reason });
      this.ws = null;
    });

    ws.addEventListener("message", (ev) => {
      const data = LEDServerMessage.decode(wsDataToBytes(ev.data));
      this.emit("message", data);
    });

    this.openPromise = new Promise((resolve, reject) => {
      ws.addEventListener("open", () => {
        resolve();
      });

      ws.addEventListener("close", (ev) => {
        const reason = maybeBufferToString(ev.reason);
        reject(new Error(`closed (code ${ev.code}): ${reason}`));
      });

      ws.addEventListener("error", () => {
        reject(new Error(`websocket connection error: server unreachable`));
      });
    });
  }
}

function wsDataToBytes(buf: WebSocket.Data): Uint8Array {
  // JavaScript is a wonderful language :)
  if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  }
  if (buf instanceof Buffer) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  if (typeof buf === "string") {
    return new TextEncoder().encode(buf);
  }
  throw new Error("unknown websocket data type");
}

function maybeBufferToString(buf: string | Buffer): string {
  if (buf instanceof Buffer) {
    return buf.toString();
  }
  return buf;
}
