/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx,jsx}", "./src/*/.{js,tsx,jsx}"],
  theme: {
    extend: {
      animation: {
        bounce2: "bounce2 1s infinite",
      },
      keyframes: {
        bounce2: {
          "0%": {
            transform: "translateY(-10%) rotate(10deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
