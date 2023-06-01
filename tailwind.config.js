/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'Cream':'hsl(30, 38%, 92%)',
        'White':'hsl(0, 0%, 100%)',
        'DarkCyan':'hsl(158, 36%, 37%)',
        'VeryDarkBlue':'hsl(212, 21%, 14%)'
      },
      colors:{
        'White':'hsl(0, 0%, 100%)',
        'DarkCyan':'hsl(158, 36%, 37%)',
        'DarkGrayishBlue':'hsl(228, 12%, 48%)'
      },
      screens:{
        'smL':{'max':'597px'},
        'Desktop':{'max':'1441px'}
      },
      fontFamily:{
        'Montserrat':['Montserrat','sans-serif'],
        'Fraunces':['Fraunces','serif']
      }
    },
  },
  plugins: [],
}

