/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#000000',
        main: '#1E1E1E',
        box: '#F1F1F1B2'
      },
      fontFamily: {
        robotoFont: ['Roboto', 'sans-serif'],
        openSansFont: ['Open Sans', 'sans-serif'],
      },

    },
    
  },
  darkMode:"class",
  variants: {},
  plugins: [],
}