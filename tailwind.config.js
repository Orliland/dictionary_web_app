/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "sans-serif"],
      serif: ["Lora Variable", "serif"],
      mono: ["Inconsolata Variable", "monospace"],
    },
    colors: {
      black: {
        100: "#3a3a3a",
        200: "#2d2d2d",
        300: "#1f1f1f",
        400: "#050505",
      },
      white: {
        100: "#ffffff",
        200: "#f4f4f4",
        300: "#e9e9e9",
        400: "#757575",
      },
      red: "#FF5252",
      purple: "#A445ED",
    },
    extend: {},
  },
  plugins: [],
};
