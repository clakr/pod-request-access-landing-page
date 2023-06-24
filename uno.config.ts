import {
  defineConfig,
  presetWebFonts,
  presetWind,
  presetAttributify,
} from "unocss";
import presetClark from "./presetClark";
import { theme } from "@unocss/preset-wind";

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      fonts: { sans: "Chivo:100,400" },
    }),
    presetClark(),
    presetAttributify(),
  ],
  layers: {
    presetClark: 3,
  },
  preflights: [
    {
      getCSS: () =>
        `:root { font-size: 62.5%; font-family: 'Chivo', sans-serif }`,
    },
  ],
  theme: {
    colors: {
      "black-russian": "#121725",
      "medium-aquamarine": "#54E6AF",
      periwinkle: "#C2CBE5",
      bunting: "#2C344B",
    },
  },
  shortcuts: {},
  rules: [
    [
      "bg-mobile",
      {
        "background-image": "url(/mobile/image-host.jpg)",
      },
    ],
    [
      "bg-tablet",
      {
        "background-image":
          "url(/tablet/image-host.jpg), url(/desktop/bg-pattern-dots.svg)",
        "background-repeat": "no-repeat",
        "background-position": "top right, bottom left 3rem",
      },
    ],
    [
      "bg-desktop",
      {
        "background-image":
          "url(/desktop/bg-pattern-dots.svg), url(/desktop/image-host.jpg) ",
        "background-position": "bottom 7.8rem right, center right",
      },
    ],
  ],
});
