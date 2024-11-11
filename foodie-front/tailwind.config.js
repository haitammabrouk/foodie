/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-color": "var(--orange-color)",
        "green-color": "var(--green-color)",
        "linen-color": "var(--linen-color)",
        "black-color": "var(--black-color)",
        "grey-color": "var(--grey-color)",
        "white-color": "var(--white-color)"
      },
      width: {
        "menu": "800px",
      }
    },
  },
  plugins: [],
}
