/* eslint-disable no-undef */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: "#root",
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { max: "639px" },
      ...defaultTheme.screens,
    },
    colors: {
      background: {
        light: "#FAFAFA",
        dark: "#041F31",
      },
    },

    extend: {},
  },
  plugins: [],
};
