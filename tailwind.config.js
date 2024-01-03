/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      // 'red': '#B91C1A',
      'red': 'rgb(185 28 28)',
      'green': '#65a30d',
      'yellow': 'rgb(234 179 8)',
      
      'purple': '#3f3cbb',
      'midnight': '#4D4C5C',
      
      
      // 'metal': '#181a20',
      // 'input': '#1e2329',
      'inputBorder': '#fcd535',
      
      'metal': '#181a20',
      // 'input': '#1e2329',
      // 'inputBorder': '#03aac7',
      
      'metal': '#27455c',
      'input': '#1e2329',
      // 'inputBorder': '#03aac7',

      // 'metal': '#474d57',
      // 'metal': '#565584',
      // 'metal': 'rgb(86, 85, 132, 0.5 )',
      'olive': '#353839',
      // 'input': '#4D4C5C',
      // 'inputBorder': '#4D4C5C',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {},
  },
  plugins: [],
}