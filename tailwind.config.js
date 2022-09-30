
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        anton:['Anton','sans-serif'],
        com:['Cormorant','sans-serif'],
        pop:['Poppins','sans-serif'],
        formula:['Formula Condensed','sans-serif']
      }
    },
  },
  plugins: [require('tailwind-hamburgers')],
}