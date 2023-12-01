import _m0 from 'protobufjs/minimal.js';
import { Emitter } from 'strict-event-emitter';
import WebSocket from 'ws';
import * as imagejs from 'image-js';

function createBaseLEDClientMessage() {
  return { getLedCanvasInfo: void 0, setLedCanvas: void 0, getLeds: void 0, setLeds: void 0 };
}
const LEDClientMessage = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.getLedCanvasInfo !== void 0) {
      GetLEDCanvasInfoRequest.encode(message.getLedCanvasInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.setLedCanvas !== void 0) {
      SetLEDCanvasRequest.encode(message.setLedCanvas, writer.uint32(26).fork()).ldelim();
    }
    if (message.getLeds !== void 0) {
      GetLEDsRequest.encode(message.getLeds, writer.uint32(34).fork()).ldelim();
    }
    if (message.setLeds !== void 0) {
      SetLEDsRequest.encode(message.setLeds, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLEDClientMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }
          message.getLedCanvasInfo = GetLEDCanvasInfoRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.setLedCanvas = SetLEDCanvasRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.getLeds = GetLEDsRequest.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.setLeds = SetLEDsRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      getLedCanvasInfo: isSet(object.getLedCanvasInfo) ? GetLEDCanvasInfoRequest.fromJSON(object.getLedCanvasInfo) : void 0,
      setLedCanvas: isSet(object.setLedCanvas) ? SetLEDCanvasRequest.fromJSON(object.setLedCanvas) : void 0,
      getLeds: isSet(object.getLeds) ? GetLEDsRequest.fromJSON(object.getLeds) : void 0,
      setLeds: isSet(object.setLeds) ? SetLEDsRequest.fromJSON(object.setLeds) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.getLedCanvasInfo !== void 0) {
      obj.getLedCanvasInfo = GetLEDCanvasInfoRequest.toJSON(message.getLedCanvasInfo);
    }
    if (message.setLedCanvas !== void 0) {
      obj.setLedCanvas = SetLEDCanvasRequest.toJSON(message.setLedCanvas);
    }
    if (message.getLeds !== void 0) {
      obj.getLeds = GetLEDsRequest.toJSON(message.getLeds);
    }
    if (message.setLeds !== void 0) {
      obj.setLeds = SetLEDsRequest.toJSON(message.setLeds);
    }
    return obj;
  },
  create(base) {
    return LEDClientMessage.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseLEDClientMessage();
    message.getLedCanvasInfo = object.getLedCanvasInfo !== void 0 && object.getLedCanvasInfo !== null ? GetLEDCanvasInfoRequest.fromPartial(object.getLedCanvasInfo) : void 0;
    message.setLedCanvas = object.setLedCanvas !== void 0 && object.setLedCanvas !== null ? SetLEDCanvasRequest.fromPartial(object.setLedCanvas) : void 0;
    message.getLeds = object.getLeds !== void 0 && object.getLeds !== null ? GetLEDsRequest.fromPartial(object.getLeds) : void 0;
    message.setLeds = object.setLeds !== void 0 && object.setLeds !== null ? SetLEDsRequest.fromPartial(object.setLeds) : void 0;
    return message;
  }
};
function createBaseLEDServerMessage() {
  return { getLedCanvasInfo: void 0, getLeds: void 0, error: void 0 };
}
const LEDServerMessage = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.getLedCanvasInfo !== void 0) {
      GetLEDCanvasInfoResponse.encode(message.getLedCanvasInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.getLeds !== void 0) {
      GetLEDsResponse.encode(message.getLeds, writer.uint32(26).fork()).ldelim();
    }
    if (message.error !== void 0) {
      writer.uint32(802).string(message.error);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLEDServerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }
          message.getLedCanvasInfo = GetLEDCanvasInfoResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.getLeds = GetLEDsResponse.decode(reader, reader.uint32());
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }
          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      getLedCanvasInfo: isSet(object.getLedCanvasInfo) ? GetLEDCanvasInfoResponse.fromJSON(object.getLedCanvasInfo) : void 0,
      getLeds: isSet(object.getLeds) ? GetLEDsResponse.fromJSON(object.getLeds) : void 0,
      error: isSet(object.error) ? globalThis.String(object.error) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.getLedCanvasInfo !== void 0) {
      obj.getLedCanvasInfo = GetLEDCanvasInfoResponse.toJSON(message.getLedCanvasInfo);
    }
    if (message.getLeds !== void 0) {
      obj.getLeds = GetLEDsResponse.toJSON(message.getLeds);
    }
    if (message.error !== void 0) {
      obj.error = message.error;
    }
    return obj;
  },
  create(base) {
    return LEDServerMessage.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseLEDServerMessage();
    message.getLedCanvasInfo = object.getLedCanvasInfo !== void 0 && object.getLedCanvasInfo !== null ? GetLEDCanvasInfoResponse.fromPartial(object.getLedCanvasInfo) : void 0;
    message.getLeds = object.getLeds !== void 0 && object.getLeds !== null ? GetLEDsResponse.fromPartial(object.getLeds) : void 0;
    message.error = object.error ?? void 0;
    return message;
  }
};
function createBaseGetLEDsRequest() {
  return {};
}
const GetLEDsRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLEDsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return GetLEDsRequest.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseGetLEDsRequest();
    return message;
  }
};
function createBaseGetLEDsResponse() {
  return { leds: [] };
}
const GetLEDsResponse = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.leds) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLEDsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 13) {
            message.leds.push(reader.fixed32());
            continue;
          }
          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.leds.push(reader.fixed32());
            }
            continue;
          }
          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { leds: globalThis.Array.isArray(object?.leds) ? object.leds.map((e) => globalThis.Number(e)) : [] };
  },
  toJSON(message) {
    const obj = {};
    if (message.leds?.length) {
      obj.leds = message.leds.map((e) => Math.round(e));
    }
    return obj;
  },
  create(base) {
    return GetLEDsResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseGetLEDsResponse();
    message.leds = object.leds?.map((e) => e) || [];
    return message;
  }
};
function createBaseSetLEDsRequest() {
  return { leds: [] };
}
const SetLEDsRequest = {
  encode(message, writer = _m0.Writer.create()) {
    writer.uint32(10).fork();
    for (const v of message.leds) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetLEDsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 13) {
            message.leds.push(reader.fixed32());
            continue;
          }
          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.leds.push(reader.fixed32());
            }
            continue;
          }
          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { leds: globalThis.Array.isArray(object?.leds) ? object.leds.map((e) => globalThis.Number(e)) : [] };
  },
  toJSON(message) {
    const obj = {};
    if (message.leds?.length) {
      obj.leds = message.leds.map((e) => Math.round(e));
    }
    return obj;
  },
  create(base) {
    return SetLEDsRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseSetLEDsRequest();
    message.leds = object.leds?.map((e) => e) || [];
    return message;
  }
};
function createBaseGetLEDCanvasInfoRequest() {
  return {};
}
const GetLEDCanvasInfoRequest = {
  encode(_, writer = _m0.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLEDCanvasInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return GetLEDCanvasInfoRequest.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseGetLEDCanvasInfoRequest();
    return message;
  }
};
function createBaseGetLEDCanvasInfoResponse() {
  return { width: 0, height: 0 };
}
const GetLEDCanvasInfoResponse = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetLEDCanvasInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.width = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.height = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },
  create(base) {
    return GetLEDCanvasInfoResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseGetLEDCanvasInfoResponse();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  }
};
function createBaseSetLEDCanvasRequest() {
  return { pixels: void 0 };
}
const SetLEDCanvasRequest = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pixels !== void 0) {
      RGBAPixels.encode(message.pixels, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSetLEDCanvasRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }
          message.pixels = RGBAPixels.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { pixels: isSet(object.pixels) ? RGBAPixels.fromJSON(object.pixels) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.pixels !== void 0) {
      obj.pixels = RGBAPixels.toJSON(message.pixels);
    }
    return obj;
  },
  create(base) {
    return SetLEDCanvasRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseSetLEDCanvasRequest();
    message.pixels = object.pixels !== void 0 && object.pixels !== null ? RGBAPixels.fromPartial(object.pixels) : void 0;
    return message;
  }
};
function createBaseRGBAPixels() {
  return { pixels: new Uint8Array(0) };
}
const RGBAPixels = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.pixels.length !== 0) {
      writer.uint32(10).bytes(message.pixels);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRGBAPixels();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.pixels = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { pixels: isSet(object.pixels) ? bytesFromBase64(object.pixels) : new Uint8Array(0) };
  },
  toJSON(message) {
    const obj = {};
    if (message.pixels.length !== 0) {
      obj.pixels = base64FromBytes(message.pixels);
    }
    return obj;
  },
  create(base) {
    return RGBAPixels.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRGBAPixels();
    message.pixels = object.pixels ?? new Uint8Array(0);
    return message;
  }
};
function bytesFromBase64(b64) {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}
function base64FromBytes(arr) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}
function isSet(value) {
  return value !== null && value !== void 0;
}

class Client extends Emitter {
  constructor(url) {
    super();
    this.url = url;
    this.openPromise = Promise.resolve();
    this.ws = null;
  }
  // connect connects to the server and authenticates with the given secret.
  // It blocks until the connection is established.
  async connect() {
    this.init();
    await this.openPromise;
  }
  close(graceful = true) {
    if (this.ws)
      this.ws.close(graceful ? 1e3 : 1001);
  }
  send(message) {
    if (!this.ws)
      throw new Error("websocket is closed");
    this.ws.send(LEDClientMessage.encode(message).finish());
  }
  async nextMessage(types) {
    let isMatch;
    if (types) {
      if (Array.isArray(types)) {
        isMatch = (ev) => types.some((type) => !!ev[type]);
      } else {
        isMatch = (ev) => !!ev[types];
      }
    }
    return new Promise((resolve, reject) => {
      const onMessage = (ev) => {
        if (!isMatch || isMatch(ev)) {
          unbind();
          resolve(ev);
        }
      };
      const onClose = (ev) => {
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
  async *messages() {
    while (true) {
      yield await this.nextMessage();
    }
  }
  init() {
    if (this.ws)
      return;
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
function wsDataToBytes(buf) {
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
function maybeBufferToString(buf) {
  if (buf instanceof Buffer) {
    return buf.toString();
  }
  return buf;
}

var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var _canvasInfo, _draw, draw_fn;
const _LEDCanvas = class _LEDCanvas extends Client {
  constructor() {
    super(...arguments);
    __privateAdd(this, _draw);
    __privateAdd(this, _canvasInfo, null);
  }
  async canvasInfo() {
    if (__privateGet(this, _canvasInfo)) {
      return __privateGet(this, _canvasInfo);
    }
    const promise = super.nextMessage("getLedCanvasInfo");
    super.send({ getLedCanvasInfo: {} });
    const info = (await promise).getLedCanvasInfo;
    __privateSet(this, _canvasInfo, info);
    return info;
  }
  draw(info, image) {
    if (isIJSImage(image)) {
      if (image.width !== info.width || image.height !== info.height) {
        image = image.resize({
          width: info.width,
          height: info.height,
          preserveAspectRatio: true,
          // on a christmas tree, we don't expect high fidelity
          interpolation: "nearestNeighbor"
        });
      }
      __privateMethod(this, _draw, draw_fn).call(this, info, {
        width: image.width,
        height: image.height,
        pixels: image.getRGBAData()
      });
    } else {
      __privateMethod(this, _draw, draw_fn).call(this, info, image);
    }
  }
};
_canvasInfo = new WeakMap();
_draw = new WeakSet();
draw_fn = function(info, image) {
  const expectedPixels = info.width * info.height * 4;
  if (image.pixels.length !== expectedPixels) {
    throw new Error(
      `image has ${image.pixels.length} pixels, expected ${expectedPixels}`
    );
  }
  __superGet(_LEDCanvas.prototype, this, "send").call(this, {
    setLedCanvas: {
      pixels: {
        pixels: image.pixels
      }
    }
  });
};
let LEDCanvas = _LEDCanvas;
function isIJSImage(image) {
  return imagejs.Image.isImage(image);
}

export { Client, LEDCanvas };
