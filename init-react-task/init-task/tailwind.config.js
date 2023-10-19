/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto_condensed: "Roboto Condensed, sans-serif",
        bebas_neue: "Bebas Neue, sans-serif",
      },
      backgroundImage: {
        "hero-bg": 'url("../src/assets/hero-bg.svg")',
        "bottom-bg": 'url("../src/assets/bottom-card.svg")',
        "list-bg": 'url("../src/assets/list-bg.svg")',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
