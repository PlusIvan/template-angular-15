/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html','./src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        latte: {
          "red": "#6F1D1B",
          "caramel": "#BB9457",
          "chocolate": "#432818",
          "cappuccino": "#99582A",
          "milk": "#FFE6A7"
        }
      }
    },
  },
  plugins: [],
}
