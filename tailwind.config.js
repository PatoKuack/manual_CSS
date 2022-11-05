/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Paginas/paginacss61.html", "./Estilos/tailwind_src/*.{html,js}"],
  darkMode: 'class', // false, 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        'primary': '#0891b2',
        'secondary': '#22d3ee',
      },
      blur: {
        xs: '.5px'
      }
    },
  },
  variants: {},
  plugins: [],
}