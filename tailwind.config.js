/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#80B435',
        Gray: '#D9D9D9',
      },
      fontFamily: {
        lobster: ['"Blenda Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
