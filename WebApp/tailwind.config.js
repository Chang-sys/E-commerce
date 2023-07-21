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
        customGray: '#EDF4F7',
        Gray: '#D9D9D9',
        Gray_100: '#8D9FA8',
        LightGray: '#EDF4F7',
        customOrange: '#FF9900'
      },
      fontFamily: {
        lobster: ['"Blenda Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
