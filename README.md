# christmas-client-js

JavaScript client library for
[christmasd](https://github.com/acmCSUFDev/christmasd).

## Example

See [christmas-js-example](https://github.com/acmCSUFDev/christmas-js-example).

## Usage

> [!IMPORTANT]
> This library **only works with ES Modules**. Make sure you have
> `"type": "module"` in your `package.json`.

```sh
npm i acmCSUFDev/christmas-client-js#main
```

```js
import { LEDCanvas } from "christmas-client-js";

const canvas = new LEDCanvas("ws://...");
await canvas.connect();
const canvasInfo = await canvas.canvasInfo();
canvas.draw(canvasInfo, image);
```
