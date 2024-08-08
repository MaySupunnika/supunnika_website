/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vt323: ["VT323"],
        silkscreen: ["Silkscreen"],
        pixeled: ["pixeled"],
      },
      letterSpacing: {
        custom: "-0.15em",
      },
      scale: {
        65: "0.65",
        60: "0.6",
        55: "0.55",
      },
    },
  },
  plugins: [],
};
