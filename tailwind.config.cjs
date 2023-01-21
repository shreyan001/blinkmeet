/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        'black1': '#232323',
        'black2': '#262626',
        'black3': '#IEIEIE',
        'black4': '#0D0D0D',
      },
      fontSize: {
      
        '1xl': ['2.41rem', '1'],
        'small':['8.3px']
      }
    },
  },
  plugins: [],
}