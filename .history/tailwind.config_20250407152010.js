/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#7C3AED",
        accent: "#00D9C6",
        dark: {
          100: "#131336",
          200: "#1F1D4E",
        },
        light: {
          100: "#ECEEFE",
          200: "#BFC0E2",
          300: "#8084C9",
        },
      },
    },
  },
  plugins: [],
};
