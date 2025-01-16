import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#F3F7FB",
          "100": "#DADEEA",
          "200": "#C5C9D7",
          "300": "#B0B4C4",
          "400": "#9B9FB1",
          "500": "#868A9E",
          "600": "#71758B",
          "700": "#5C6078",
          "800": "#474B65",
          "900": "#323652",
          "950": "#1D213F",
        },
        accent: {
          "50": "#FEF4F3",
          "100": "#FDE8E7",
          "200": "#FAC1C2",
          "300": "#F79C9C",
          "400": "#F47776",
          "500": "#EE2D2A",
          "600": "#C42622",
          "700": "#991D1A",
          "800": "#6E1412",
          "900": "#430B0A",
          "950": "#180202",
        },
        neutral: {
          "50": "#F2F2F2",
          "100": "#DBDBDB",
          "200": "#C2C2C2",
          "300": "#A9A9A9",
          "400": "#909090",
          "500": "#777777",
          "600": "#616161",
          "700": "#4C4C4C",
          "800": "#373737",
          "900": "#222222",
          "950": "#0D0D0D",
        },
        opaque: {
          "white": "#FFFFFF80",
          "black": "#00000080",
        },
      },
      screens: {
        xs: "425px",
        // => @media (min-width: 425px) { ... }
      },
    },
  },
  plugins: [],
} satisfies Config;
