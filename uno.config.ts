import { defineConfig, presetWebFonts, presetWind } from "unocss";
import clarkPreset from './clarkPreset';

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: {}
    }),
    presetClark()
  ],
})