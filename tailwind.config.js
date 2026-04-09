/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all files for Tailwind classes
  ],
  theme: {
    extend: {
      // ✅ keep your custom color
      colors: {
        primary: "#1E40AF",
      },
      // ✅ add sneaker animation
      keyframes: {
        sneaker: {
          "0%, 10%": { transform: "translate(100vw, 0) rotate(15deg)" },
          "90%, 100%": { transform: "translate(-5vw, -5vw) rotate(-30deg)" },
        },
      },
      animation: {
        sneaker: "sneaker 2s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate",
      },
    },
  },
  plugins: [],
});
