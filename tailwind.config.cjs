/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'], 
        Lato: ['Lato', 'sans-serif']
      }, 
      colors: {
        gray100: '#D0D7DC',
        gray600: '#4E5E6A',
        pumpkin: '#ff6700',
        lightblue: '#6BB7D6',
        lightblue100: '#AECBD6',
        charcoal: '#2E4E5B',
        russet: '#713710', 
        silver: '#C0C0C0'
        
      },
    },

  },
  plugins: [],
}
