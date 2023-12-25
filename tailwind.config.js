/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
    theme: {
    extend: {
      colors:{
        primary:"hsl(47, 88%, 63%)"
      },
      fontFamily:{
        figtree: "Figtree"
      }
    },
  },
  plugins: [],
}

