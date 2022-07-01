/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#4f4f4f',
        'yellow-rgba': 'rgba(235, 87, 87, 0.72)',
      }
    },
    fontFamily: {
      'mulish': ['Mulish'],
      'montserrat': ['Montserrat']
    }
  },
  plugins: [],
}
