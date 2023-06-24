import { Preset } from 'unocss';

export default function presetClark(): Preset {
  return {
    name: 'presetClark',
    preflights: [
      {
        getCSS: () =>
          ":root { font-size: 62.5%; }",
      },
    ],
    theme: {
      colors: {},
      breakpoints: {
        tablet: "768px",
        desktop: "1440px",
      },
    },
    shortcuts: {},
    rules: []
  }
}