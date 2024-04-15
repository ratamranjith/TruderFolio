/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // primary: "#000d27",
        primary: "#010217",
        secondary: "#F97316",
        tertiary: "#03a9f4",
      },
      screens: {
        lg: { max: "2023px" },
        // => @media (max-width: 1023px) { ... }

        sm: { max: "1000px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
