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
      },
      boxShadow:{
        newShadow:"8px 8px 0px 0px  hsl(0, 0%, 7%)",
        newShadowHover: "14px 14px 0px 0px hsl(0, 0%, 7%)"
      }
    },
  },
  plugins: [],
}

