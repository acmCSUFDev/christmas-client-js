import { Client } from "./client.js";
import { GetLEDCanvasInfoResponse } from "./christmaspb/christmas.js";
import * as imagejs from "image-js";

export type Image = {
  width: number;
  height: number;
  pixels: Uint8Array;
};

type CanvasInfo = GetLEDCanvasInfoResponse;

export class LEDCanvas extends Client {
  #canvasInfo: CanvasInfo | null = null;

  async canvasInfo(): Promise<GetLEDCanvasInfoResponse> {
    if (this.#canvasInfo) {
      return this.#canvasInfo;
    }

    const promise = super.nextMessage("getLedCanvasInfo");
    super.send({ getLedCanvasInfo: {} });

    const info = (await promise).getLedCanvasInfo!;
    this.#canvasInfo = info;

    return info;
  }

  draw(info: CanvasInfo, image: Image): void;
  draw(info: CanvasInfo, image: imagejs.Image): void;

  draw(info: CanvasInfo, image: Image | imagejs.Image) {
    if (image instanceof imagejs.Image) {
      if (image.width !== info.width || image.height !== info.height) {
        image = image.resize({
          width: info.width,
          height: info.height,
          preserveAspectRatio: true,
          // on a christmas tree, we don't expect high fidelity
          interpolation: "nearestNeighbor",
        });
      }
      this.#draw(info, {
        width: image.width,
        height: image.height,
        pixels: image.getRGBAData() as Uint8Array,
      });
    } else {
      this.#draw(info, image);
    }
  }

  #draw(info: CanvasInfo, image: Image) {
    const expectedPixels = info.width * info.height * 4;
    if (image.pixels.length !== expectedPixels) {
      throw new Error(
        `BUG: image has ${image.pixels.length} pixels, expected ${expectedPixels}`,
      );
    }

    super.send({
      setLedCanvas: {
        pixels: {
          pixels: image.pixels,
        },
      },
    });
  }
}
