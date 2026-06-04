/* eslint-disable no-undef */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: "#root",
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { max: "639px" },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        text: {
          light: "#1F2626",
          dark: "#F3F4F6",
        },
        primary: "#7C3AED", // Neon Violet
        accent: {
          blue: "#06B6D4", // Electric Blue
          violet: "#7C3AED",
        },
        background: {
          light: "#FAFAFA",
          dark: "#0B0F19",
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(124, 58, 237, 0.4)",
        glowBlue: "0 0 15px rgba(6, 182, 212, 0.4)",
      },
    },
  },
  plugins: [],
};
