import { Client } from "./client.js";
import fetch from "node-fetch";

// Color describes a color in the format 0xRRGGBB.
// The easiest way to work with this type is to use either RGBToColor or
// HexToColor.
export type Color = number;

// Point describes a point on a 2D plane.
export type Point = { x: number; y: number };

// RGBToColor converts an RGB value to a Color. Each value should be between 0
// and 255.
export function RGBToColor(r: number, g: number, b: number): Color {
  if (r < 0 || r > 255) {
    throw new Error("r must be between 0 and 255");
  }
  if (g < 0 || g > 255) {
    throw new Error("g must be between 0 and 255");
  }
  if (b < 0 || b > 255) {
    throw new Error("b must be between 0 and 255");
  }
  return (r << 16) | (g << 8) | b;
}

// HexToColor converts a hex string to a Color. If hex is prefixed with a "#",
// it will be stripped
export function HexToColor(hex: string): Color {
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }
  return parseInt(hex, 16);
}

// LEDController is a class that extends Client and allows the user to directly
// control the LEDs on the device. It is considered a low-level API compared to
// Canvas.
export class LEDController extends Client {
  constructor(
    public readonly url: string,
    public readonly ledPointsURL = ledPointsURLFromWebsocketURL(url),
  ) {
    super(url);
  }

  async getLEDPoints(): Promise<Point[]> {
    const response = await fetch(this.ledPointsURL);
    const text = await response.text();

    return text
      .split("\n")
      .filter((line) => line.length > 0)
      .map((line) => {
        const [x, y] = line.split(",");
        return { x: parseFloat(x), y: parseFloat(y) };
      });
  }

  // getLEDs returns the current colors of the LEDs on the device.
  // It waits for the response from the device before returning.
  // To get the number of LEDs on the device, get the length of the returned
  // array.
  async getLEDs(): Promise<Color[]> {
    const promise = this.nextMessage("getLeds");
    this.send({ getLeds: {} });
    const response = await promise;
    return response.getLeds!.leds;
  }

  // setLEDs asynchronously sets the LEDs on the device to the given colors. The
  // length of colors must be equal to the number of LEDs on the device. The
  // controller does not check this, so it is up to the user to ensure this is
  // true.
  setLEDs(colors: Color[]) {
    this.send({
      setLeds: { leds: colors },
    });
  }
}

function ledPointsURLFromWebsocketURL(wsURL: string): string {
  const url = new URL(wsURL);
  url.protocol = url.protocol === "wss:" ? "https:" : "http:";
  url.pathname = "/led-points.csv";
  return url.toString();
}
