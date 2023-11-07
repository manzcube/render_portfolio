/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("postcss-nesting"), // Make sure this comes before Tailwind CSS
    require("tailwindcss"),
  ],
};
