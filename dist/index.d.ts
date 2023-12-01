import _m0 from 'protobufjs/minimal.js';
import { Emitter } from 'strict-event-emitter';
import * as imagejs from 'image-js';

interface LEDClientMessage {
    /**
     * Return information about the LED canvas. Sends back a
     * GetLEDCanvasInfoResponse.
     * The caller must use this information to determine the size of the image
     * to send to SetLEDCanvas.
     */
    getLedCanvasInfo?: GetLEDCanvasInfoRequest | undefined;
    /**
     * Set the LED canvas to the given image. For information on the image
     * format, see the documentation for SetLEDCanvasRequest.
     */
    setLedCanvas?: SetLEDCanvasRequest | undefined;
    /** Get the current state of the LEDs. Sends back a GetLEDsResponse. */
    getLeds?: GetLEDsRequest | undefined;
    /**
     * Set all LEDs to the given colors. The number of colors must match the
     * number of LEDs. Calling this is equivalent to calling DeleteFrames
     * followed by AddFrames with a single frame.
     */
    setLeds?: SetLEDsRequest | undefined;
}
declare const LEDClientMessage: {
    encode(message: LEDClientMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LEDClientMessage;
    fromJSON(object: any): LEDClientMessage;
    toJSON(message: LEDClientMessage): unknown;
    create<I extends {
        getLedCanvasInfo?: {} | undefined;
        setLedCanvas?: {
            pixels?: {
                pixels?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        getLeds?: {} | undefined;
        setLeds?: {
            leds?: number[] | undefined;
        } | undefined;
    } & {
        getLedCanvasInfo?: ({} & {} & { [K in Exclude<keyof I["getLedCanvasInfo"], never>]: never; }) | undefined;
        setLedCanvas?: ({
            pixels?: {
                pixels?: Uint8Array | undefined;
            } | undefined;
        } & {
            pixels?: ({
                pixels?: Uint8Array | undefined;
            } & {
                pixels?: Uint8Array | undefined;
            } & { [K_1 in Exclude<keyof I["setLedCanvas"]["pixels"], "pixels">]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["setLedCanvas"], "pixels">]: never; }) | undefined;
        getLeds?: ({} & {} & { [K_3 in Exclude<keyof I["getLeds"], never>]: never; }) | undefined;
        setLeds?: ({
            leds?: number[] | undefined;
        } & {
            leds?: (number[] & number[] & { [K_4 in Exclude<keyof I["setLeds"]["leds"], keyof number[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["setLeds"], "leds">]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof LEDClientMessage>]: never; }>(base?: I | undefined): LEDClientMessage;
    fromPartial<I_1 extends {
        getLedCanvasInfo?: {} | undefined;
        setLedCanvas?: {
            pixels?: {
                pixels?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        getLeds?: {} | undefined;
        setLeds?: {
            leds?: number[] | undefined;
        } | undefined;
    } & {
        getLedCanvasInfo?: ({} & {} & { [K_7 in Exclude<keyof I_1["getLedCanvasInfo"], never>]: never; }) | undefined;
        setLedCanvas?: ({
            pixels?: {
                pixels?: Uint8Array | undefined;
            } | undefined;
        } & {
            pixels?: ({
                pixels?: Uint8Array | undefined;
            } & {
                pixels?: Uint8Array | undefined;
            } & { [K_8 in Exclude<keyof I_1["setLedCanvas"]["pixels"], "pixels">]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["setLedCanvas"], "pixels">]: never; }) | undefined;
        getLeds?: ({} & {} & { [K_10 in Exclude<keyof I_1["getLeds"], never>]: never; }) | undefined;
        setLeds?: ({
            leds?: number[] | undefined;
        } & {
            leds?: (number[] & number[] & { [K_11 in Exclude<keyof I_1["setLeds"]["leds"], keyof number[]>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I_1["setLeds"], "leds">]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof LEDClientMessage>]: never; }>(object: I_1): LEDClientMessage;
};
interface LEDServerMessage {
    /** Response to GetLEDCanvasInfoRequest. */
    getLedCanvasInfo?: GetLEDCanvasInfoResponse | undefined;
    /** Response to GetLEDsRequest. */
    getLeds?: GetLEDsResponse | undefined;
    /**
     * If present, the server encountered an error. This is a string describing
     * the error.
     */
    error?: string | undefined;
}
declare const LEDServerMessage: {
    encode(message: LEDServerMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LEDServerMessage;
    fromJSON(object: any): LEDServerMessage;
    toJSON(message: LEDServerMessage): unknown;
    create<I extends {
        getLedCanvasInfo?: {
            width?: number | undefined;
            height?: number | undefined;
        } | undefined;
        getLeds?: {
            leds?: number[] | undefined;
        } | undefined;
        error?: string | undefined;
    } & {
        getLedCanvasInfo?: ({
            width?: number | undefined;
            height?: number | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
        } & { [K in Exclude<keyof I["getLedCanvasInfo"], keyof GetLEDCanvasInfoResponse>]: never; }) | undefined;
        getLeds?: ({
            leds?: number[] | undefined;
        } & {
            leds?: (number[] & number[] & { [K_1 in Exclude<keyof I["getLeds"]["leds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["getLeds"], "leds">]: never; }) | undefined;
        error?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof LEDServerMessage>]: never; }>(base?: I | undefined): LEDServerMessage;
    fromPartial<I_1 extends {
        getLedCanvasInfo?: {
            width?: number | undefined;
            height?: number | undefined;
        } | undefined;
        getLeds?: {
            leds?: number[] | undefined;
        } | undefined;
        error?: string | undefined;
    } & {
        getLedCanvasInfo?: ({
            width?: number | undefined;
            height?: number | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
        } & { [K_4 in Exclude<keyof I_1["getLedCanvasInfo"], keyof GetLEDCanvasInfoResponse>]: never; }) | undefined;
        getLeds?: ({
            leds?: number[] | undefined;
        } & {
            leds?: (number[] & number[] & { [K_5 in Exclude<keyof I_1["getLeds"]["leds"], keyof number[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["getLeds"], "leds">]: never; }) | undefined;
        error?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof LEDServerMessage>]: never; }>(object: I_1): LEDServerMessage;
};
interface GetLEDsRequest {
}
declare const GetLEDsRequest: {
    encode(_: GetLEDsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLEDsRequest;
    fromJSON(_: any): GetLEDsRequest;
    toJSON(_: GetLEDsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): GetLEDsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetLEDsRequest;
};
interface GetLEDsResponse {
    /**
     * A 1D array of colors. The number of colors matches the number of LEDs.
     * Each color is represented as 0xRRGGBB.
     */
    leds: number[];
}
declare const GetLEDsResponse: {
    encode(message: GetLEDsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLEDsResponse;
    fromJSON(object: any): GetLEDsResponse;
    toJSON(message: GetLEDsResponse): unknown;
    create<I extends {
        leds?: number[] | undefined;
    } & {
        leds?: (number[] & number[] & { [K in Exclude<keyof I["leds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "leds">]: never; }>(base?: I | undefined): GetLEDsResponse;
    fromPartial<I_1 extends {
        leds?: number[] | undefined;
    } & {
        leds?: (number[] & number[] & { [K_2 in Exclude<keyof I_1["leds"], keyof number[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "leds">]: never; }>(object: I_1): GetLEDsResponse;
};
interface SetLEDsRequest {
    /**
     * A 1D array of colors. The number of colors must match the number of LEDs.
     * Eaech color is represented as 0xRRGGBB.
     * To get the number of LEDs, call GetLEDs.
     */
    leds: number[];
}
declare const SetLEDsRequest: {
    encode(message: SetLEDsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLEDsRequest;
    fromJSON(object: any): SetLEDsRequest;
    toJSON(message: SetLEDsRequest): unknown;
    create<I extends {
        leds?: number[] | undefined;
    } & {
        leds?: (number[] & number[] & { [K in Exclude<keyof I["leds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "leds">]: never; }>(base?: I | undefined): SetLEDsRequest;
    fromPartial<I_1 extends {
        leds?: number[] | undefined;
    } & {
        leds?: (number[] & number[] & { [K_2 in Exclude<keyof I_1["leds"], keyof number[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "leds">]: never; }>(object: I_1): SetLEDsRequest;
};
interface GetLEDCanvasInfoRequest {
}
declare const GetLEDCanvasInfoRequest: {
    encode(_: GetLEDCanvasInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLEDCanvasInfoRequest;
    fromJSON(_: any): GetLEDCanvasInfoRequest;
    toJSON(_: GetLEDCanvasInfoRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): GetLEDCanvasInfoRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetLEDCanvasInfoRequest;
};
interface GetLEDCanvasInfoResponse {
    /** Width of the LED canvas, in pixels. This is also the stride. */
    width: number;
    /** Height of the LED canvas, in pixels. */
    height: number;
}
declare const GetLEDCanvasInfoResponse: {
    encode(message: GetLEDCanvasInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLEDCanvasInfoResponse;
    fromJSON(object: any): GetLEDCanvasInfoResponse;
    toJSON(message: GetLEDCanvasInfoResponse): unknown;
    create<I extends {
        width?: number | undefined;
        height?: number | undefined;
    } & {
        width?: number | undefined;
        height?: number | undefined;
    } & { [K in Exclude<keyof I, keyof GetLEDCanvasInfoResponse>]: never; }>(base?: I | undefined): GetLEDCanvasInfoResponse;
    fromPartial<I_1 extends {
        width?: number | undefined;
        height?: number | undefined;
    } & {
        width?: number | undefined;
        height?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GetLEDCanvasInfoResponse>]: never; }>(object: I_1): GetLEDCanvasInfoResponse;
};
interface SetLEDCanvasRequest {
    /**
     * The pixels to set. The number of pixels must match width * height as
     * returned by GetLEDCanvasInfo. See RGBAPixels for the format.
     */
    pixels: RGBAPixels | undefined;
}
declare const SetLEDCanvasRequest: {
    encode(message: SetLEDCanvasRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetLEDCanvasRequest;
    fromJSON(object: any): SetLEDCanvasRequest;
    toJSON(message: SetLEDCanvasRequest): unknown;
    create<I extends {
        pixels?: {
            pixels?: Uint8Array | undefined;
        } | undefined;
    } & {
        pixels?: ({
            pixels?: Uint8Array | undefined;
        } & {
            pixels?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["pixels"], "pixels">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "pixels">]: never; }>(base?: I | undefined): SetLEDCanvasRequest;
    fromPartial<I_1 extends {
        pixels?: {
            pixels?: Uint8Array | undefined;
        } | undefined;
    } & {
        pixels?: ({
            pixels?: Uint8Array | undefined;
        } & {
            pixels?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["pixels"], "pixels">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "pixels">]: never; }>(object: I_1): SetLEDCanvasRequest;
};
interface RGBAPixels {
    /**
     * A 1D array of pixels, in row-major order. The number of pixels must match
     * width * height * 4, which is ordered as RGBA.
     */
    pixels: Uint8Array;
}
declare const RGBAPixels: {
    encode(message: RGBAPixels, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RGBAPixels;
    fromJSON(object: any): RGBAPixels;
    toJSON(message: RGBAPixels): unknown;
    create<I extends {
        pixels?: Uint8Array | undefined;
    } & {
        pixels?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "pixels">]: never; }>(base?: I | undefined): RGBAPixels;
    fromPartial<I_1 extends {
        pixels?: Uint8Array | undefined;
    } & {
        pixels?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, "pixels">]: never; }>(object: I_1): RGBAPixels;
};

type CloseEvent = {
    reason: string;
};
type Events = {
    open: [void];
    close: [CloseEvent];
    message: [LEDServerMessage];
};
declare class Client extends Emitter<Events> {
    readonly url: string;
    private ws;
    private openPromise;
    constructor(url: string);
    connect(): Promise<void>;
    close(graceful?: boolean): void;
    send(message: LEDClientMessage): void;
    nextMessage(types?: keyof LEDServerMessage | keyof LEDServerMessage[]): Promise<LEDServerMessage>;
    messages(): AsyncGenerator<LEDServerMessage>;
    private init;
}

type Image = {
    width: number;
    height: number;
    pixels: Uint8Array;
};
type CanvasInfo = GetLEDCanvasInfoResponse;
declare class LEDCanvas extends Client {
    #private;
    canvasInfo(): Promise<GetLEDCanvasInfoResponse>;
    draw(info: CanvasInfo, image: Image | imagejs.Image): void;
}

export { Client, type CloseEvent, type Events, type Image, LEDCanvas };
