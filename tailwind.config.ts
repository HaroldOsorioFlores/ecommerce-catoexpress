import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "50": "#eefce9",
          "100": "#d9f7d0",
          "200": "#b6f0a6",
          "300": "#88e472",
          "400": "#61d447",
          "500": "#40ba28",
          "600": "#2d941c",
          "700": "#246d19",
          "800": "#225a1a",
          "900": "#1f4d1a",
          "950": "#0c2a09",
        },
        secondary: {
          "50": "#f3faeb",
          "100": "#e5f3d4",
          "200": "#cde8ae",
          "300": "#add87e",
          "400": "#8ec655",
          "500": "#79b93c",
          "600": "#558828",
          "700": "#426823",
          "800": "#375321",
          "900": "#304720",
          "950": "#17260d",
        },
        tertiary: {
          "50": "#fffbea",
          "100": "#fff5c5",
          "200": "#ffeb86",
          "300": "#ffda46",
          "400": "#ffc71c",
          "500": "#fea90f",
          "600": "#e17c00",
          "700": "#bb5502",
          "800": "#974109",
          "900": "#7c360b",
          "950": "#481a00",
        },
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "1600px",
      },
    },
  },
};
export default config;
