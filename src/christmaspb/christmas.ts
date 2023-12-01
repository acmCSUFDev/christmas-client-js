/* eslint-disable */
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "christmas";

export interface LEDClientMessage {
  /**
   * Return information about the LED canvas. Sends back a
   * GetLEDCanvasInfoResponse.
   * The caller must use this information to determine the size of the image
   * to send to SetLEDCanvas.
   */
  getLedCanvasInfo?:
    | GetLEDCanvasInfoRequest
    | undefined;
  /**
   * Set the LED canvas to the given image. For information on the image
   * format, see the documentation for SetLEDCanvasRequest.
   */
  setLedCanvas?:
    | SetLEDCanvasRequest
    | undefined;
  /** Get the current state of the LEDs. Sends back a GetLEDsResponse. */
  getLeds?:
    | GetLEDsRequest
    | undefined;
  /**
   * Set all LEDs to the given colors. The number of colors must match the
   * number of LEDs. Calling this is equivalent to calling DeleteFrames
   * followed by AddFrames with a single frame.
   */
  setLeds?: SetLEDsRequest | undefined;
}

export interface LEDServerMessage {
  /** Response to GetLEDCanvasInfoRequest. */
  getLedCanvasInfo?:
    | GetLEDCanvasInfoResponse
    | undefined;
  /** Response to GetLEDsRequest. */
  getLeds?:
    | GetLEDsResponse
    | undefined;
  /**
   * If present, the server encountered an error. This is a string describing
   * the error.
   */
  error?: string | undefined;
}

export interface GetLEDsRequest {
}

export interface GetLEDsResponse {
  /**
   * A 1D array of colors. The number of colors matches the number of LEDs.
   * Each color is represented as 0xRRGGBB.
   */
  leds: number[];
}

export interface SetLEDsRequest {
  /**
   * A 1D array of colors. The number of colors must match the number of LEDs.
   * Eaech color is represented as 0xRRGGBB.
   * To get the number of LEDs, call GetLEDs.
   */
  leds: number[];
}

export interface GetLEDCanvasInfoRequest {
}

export interface GetLEDCanvasInfoResponse {
  /** Width of the LED canvas, in pixels. This is also the stride. */
  width: number;
  /** Height of the LED canvas, in pixels. */
  height: number;
}

export interface SetLEDCanvasRequest {
  /**
   * The pixels to set. The number of pixels must match width * height as
   * returned by GetLEDCanvasInfo. See RGBAPixels for the format.
   */
  pixels: RGBAPixels | undefined;
}

export interface RGBAPixels {
  /**
   * A 1D array of pixels, in row-major order. The number of pixels must match
   * width * height * 4, which is ordered as RGBA.
   */
  pixels: Uint8Array;
}

function createBaseLEDClientMessage(): LEDClientMessage {
  return { getLedCanvasInfo: undefined, setLedCanvas: undefined, getLeds: undefined, setLeds: undefined };
}

export const LEDClientMessage = {
  encode(message: LEDClientMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.getLedCanvasInfo !== undefined) {
      GetLEDCanvasInfoRequest.encode(message.getLedCanvasInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.setLedCanvas !== undefined) {
      SetLEDCanvasRequest.encode(message.setLedCanvas, writer.uint32(26).fork()).ldelim();
    }
    if (message.getLeds !== undefined) {
      GetLEDsRequest.encode(message.getLeds, writer.uint32(34).fork()).ldelim();
    }
    if (message.setLeds !== undefined) {
      SetLEDsRequest.encode(message.setLeds, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LEDClientMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): LEDClientMessage {
    return {
      getLedCanvasInfo: isSet(object.getLedCanvasInfo)
        ? GetLEDCanvasInfoRequest.fromJSON(object.getLedCanvasInfo)
        : undefined,
      setLedCanvas: isSet(object.setLedCanvas) ? SetLEDCanvasRequest.fromJSON(object.setLedCanvas) : undefined,
      getLeds: isSet(object.getLeds) ? GetLEDsRequest.fromJSON(object.getLeds) : undefined,
      setLeds: isSet(object.setLeds) ? SetLEDsRequest.fromJSON(object.setLeds) : undefined,
    };
  },

  toJSON(message: LEDClientMessage): unknown {
    const obj: any = {};
    if (message.getLedCanvasInfo !== undefined) {
      obj.getLedCanvasInfo = GetLEDCanvasInfoRequest.toJSON(message.getLedCanvasInfo);
    }
    if (message.setLedCanvas !== undefined) {
      obj.setLedCanvas = SetLEDCanvasRequest.toJSON(message.setLedCanvas);
    }
    if (message.getLeds !== undefined) {
      obj.getLeds = GetLEDsRequest.toJSON(message.getLeds);
    }
    if (message.setLeds !== undefined) {
      obj.setLeds = SetLEDsRequest.toJSON(message.setLeds);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LEDClientMessage>, I>>(base?: I): LEDClientMessage {
    return LEDClientMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LEDClientMessage>, I>>(object: I): LEDClientMessage {
    const message = createBaseLEDClientMessage();
    message.getLedCanvasInfo = (object.getLedCanvasInfo !== undefined && object.getLedCanvasInfo !== null)
      ? GetLEDCanvasInfoRequest.fromPartial(object.getLedCanvasInfo)
      : undefined;
    message.setLedCanvas = (object.setLedCanvas !== undefined && object.setLedCanvas !== null)
      ? SetLEDCanvasRequest.fromPartial(object.setLedCanvas)
      : undefined;
    message.getLeds = (object.getLeds !== undefined && object.getLeds !== null)
      ? GetLEDsRequest.fromPartial(object.getLeds)
      : undefined;
    message.setLeds = (object.setLeds !== undefined && object.setLeds !== null)
      ? SetLEDsRequest.fromPartial(object.setLeds)
      : undefined;
    return message;
  },
};

function createBaseLEDServerMessage(): LEDServerMessage {
  return { getLedCanvasInfo: undefined, getLeds: undefined, error: undefined };
}

export const LEDServerMessage = {
  encode(message: LEDServerMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.getLedCanvasInfo !== undefined) {
      GetLEDCanvasInfoResponse.encode(message.getLedCanvasInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.getLeds !== undefined) {
      GetLEDsResponse.encode(message.getLeds, writer.uint32(26).fork()).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(802).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LEDServerMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): LEDServerMessage {
    return {
      getLedCanvasInfo: isSet(object.getLedCanvasInfo)
        ? GetLEDCanvasInfoResponse.fromJSON(object.getLedCanvasInfo)
        : undefined,
      getLeds: isSet(object.getLeds) ? GetLEDsResponse.fromJSON(object.getLeds) : undefined,
      error: isSet(object.error) ? globalThis.String(object.error) : undefined,
    };
  },

  toJSON(message: LEDServerMessage): unknown {
    const obj: any = {};
    if (message.getLedCanvasInfo !== undefined) {
      obj.getLedCanvasInfo = GetLEDCanvasInfoResponse.toJSON(message.getLedCanvasInfo);
    }
    if (message.getLeds !== undefined) {
      obj.getLeds = GetLEDsResponse.toJSON(message.getLeds);
    }
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LEDServerMessage>, I>>(base?: I): LEDServerMessage {
    return LEDServerMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LEDServerMessage>, I>>(object: I): LEDServerMessage {
    const message = createBaseLEDServerMessage();
    message.getLedCanvasInfo = (object.getLedCanvasInfo !== undefined && object.getLedCanvasInfo !== null)
      ? GetLEDCanvasInfoResponse.fromPartial(object.getLedCanvasInfo)
      : undefined;
    message.getLeds = (object.getLeds !== undefined && object.getLeds !== null)
      ? GetLEDsResponse.fromPartial(object.getLeds)
      : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetLEDsRequest(): GetLEDsRequest {
  return {};
}

export const GetLEDsRequest = {
  encode(_: GetLEDsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLEDsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLEDsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetLEDsRequest {
    return {};
  },

  toJSON(_: GetLEDsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLEDsRequest>, I>>(base?: I): GetLEDsRequest {
    return GetLEDsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLEDsRequest>, I>>(_: I): GetLEDsRequest {
    const message = createBaseGetLEDsRequest();
    return message;
  },
};

function createBaseGetLEDsResponse(): GetLEDsResponse {
  return { leds: [] };
}

export const GetLEDsResponse = {
  encode(message: GetLEDsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.leds) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLEDsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): GetLEDsResponse {
    return { leds: globalThis.Array.isArray(object?.leds) ? object.leds.map((e: any) => globalThis.Number(e)) : [] };
  },

  toJSON(message: GetLEDsResponse): unknown {
    const obj: any = {};
    if (message.leds?.length) {
      obj.leds = message.leds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLEDsResponse>, I>>(base?: I): GetLEDsResponse {
    return GetLEDsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLEDsResponse>, I>>(object: I): GetLEDsResponse {
    const message = createBaseGetLEDsResponse();
    message.leds = object.leds?.map((e) => e) || [];
    return message;
  },
};

function createBaseSetLEDsRequest(): SetLEDsRequest {
  return { leds: [] };
}

export const SetLEDsRequest = {
  encode(message: SetLEDsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.leds) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetLEDsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): SetLEDsRequest {
    return { leds: globalThis.Array.isArray(object?.leds) ? object.leds.map((e: any) => globalThis.Number(e)) : [] };
  },

  toJSON(message: SetLEDsRequest): unknown {
    const obj: any = {};
    if (message.leds?.length) {
      obj.leds = message.leds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetLEDsRequest>, I>>(base?: I): SetLEDsRequest {
    return SetLEDsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetLEDsRequest>, I>>(object: I): SetLEDsRequest {
    const message = createBaseSetLEDsRequest();
    message.leds = object.leds?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetLEDCanvasInfoRequest(): GetLEDCanvasInfoRequest {
  return {};
}

export const GetLEDCanvasInfoRequest = {
  encode(_: GetLEDCanvasInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLEDCanvasInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLEDCanvasInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetLEDCanvasInfoRequest {
    return {};
  },

  toJSON(_: GetLEDCanvasInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLEDCanvasInfoRequest>, I>>(base?: I): GetLEDCanvasInfoRequest {
    return GetLEDCanvasInfoRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLEDCanvasInfoRequest>, I>>(_: I): GetLEDCanvasInfoRequest {
    const message = createBaseGetLEDCanvasInfoRequest();
    return message;
  },
};

function createBaseGetLEDCanvasInfoResponse(): GetLEDCanvasInfoResponse {
  return { width: 0, height: 0 };
}

export const GetLEDCanvasInfoResponse = {
  encode(message: GetLEDCanvasInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLEDCanvasInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): GetLEDCanvasInfoResponse {
    return {
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: GetLEDCanvasInfoResponse): unknown {
    const obj: any = {};
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLEDCanvasInfoResponse>, I>>(base?: I): GetLEDCanvasInfoResponse {
    return GetLEDCanvasInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetLEDCanvasInfoResponse>, I>>(object: I): GetLEDCanvasInfoResponse {
    const message = createBaseGetLEDCanvasInfoResponse();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseSetLEDCanvasRequest(): SetLEDCanvasRequest {
  return { pixels: undefined };
}

export const SetLEDCanvasRequest = {
  encode(message: SetLEDCanvasRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pixels !== undefined) {
      RGBAPixels.encode(message.pixels, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetLEDCanvasRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): SetLEDCanvasRequest {
    return { pixels: isSet(object.pixels) ? RGBAPixels.fromJSON(object.pixels) : undefined };
  },

  toJSON(message: SetLEDCanvasRequest): unknown {
    const obj: any = {};
    if (message.pixels !== undefined) {
      obj.pixels = RGBAPixels.toJSON(message.pixels);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetLEDCanvasRequest>, I>>(base?: I): SetLEDCanvasRequest {
    return SetLEDCanvasRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetLEDCanvasRequest>, I>>(object: I): SetLEDCanvasRequest {
    const message = createBaseSetLEDCanvasRequest();
    message.pixels = (object.pixels !== undefined && object.pixels !== null)
      ? RGBAPixels.fromPartial(object.pixels)
      : undefined;
    return message;
  },
};

function createBaseRGBAPixels(): RGBAPixels {
  return { pixels: new Uint8Array(0) };
}

export const RGBAPixels = {
  encode(message: RGBAPixels, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pixels.length !== 0) {
      writer.uint32(10).bytes(message.pixels);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RGBAPixels {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): RGBAPixels {
    return { pixels: isSet(object.pixels) ? bytesFromBase64(object.pixels) : new Uint8Array(0) };
  },

  toJSON(message: RGBAPixels): unknown {
    const obj: any = {};
    if (message.pixels.length !== 0) {
      obj.pixels = base64FromBytes(message.pixels);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RGBAPixels>, I>>(base?: I): RGBAPixels {
    return RGBAPixels.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RGBAPixels>, I>>(object: I): RGBAPixels {
    const message = createBaseRGBAPixels();
    message.pixels = object.pixels ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
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

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
