/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        "2xxl": "28px", // 28px
        "5xxl": "50px", // 50px
        "7xl": "64px", // 64px
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        indieFlower: ['"Indie Flower", cursive'],
      },
      backgroundSize: {
        100: "100% 100%",
      },
      colors: {
        lightBlack: "#010101",
        saffron: "#F8c338",
        yellowRed: "#F2BD64",
        skyBlue: "#31ABDF",
        papayaWhip: "#FFF0CE",
        racingRed: "#D70101",
        pastedOrange: "#F4B03B",
        darkCharcoal: "#2E2C28",
        lightWhite: "#FAFAFA",
      },
    },
  },
  plugins: [],
});
