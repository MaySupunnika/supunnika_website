/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vt323: ["VT323"],
        silkscreen: ["Silkscreen"],
      },
      letterSpacing: {
        custom: "-0.15em",
      },
    },
  },
  plugins: [],
};
