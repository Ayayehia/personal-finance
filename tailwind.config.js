/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#F8F4F0",
        "dark-grey": "#201F24",
        "dark-red": "#A61C3C",
      },
    },
  },
  plugins: [],
};
