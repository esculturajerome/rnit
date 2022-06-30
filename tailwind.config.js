/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      "values-bg": "url('../public/images/bg/values-bg.png')",
      "pattern-bg": "url('../public/images/bg/pattern-bg.png')",
      "pattern-bg-2": "url('../public/images/bg/pattern-bg-2.png')",
    },
    extend: {
      colors: {
        black: "#232323",
        main: "#0972b1",
        secondary: "#fd830d",
        secondaryDark: "#fd660d",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans"],
        Lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
