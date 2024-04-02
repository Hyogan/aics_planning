/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",

  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero_pattern' : "linear-gradient(100deg, rgba(0, 0, 0, 0.493), rgba(0, 0, 0, 0.993)), url('../../public/images/analyse_decisionnelle.jpg')",
      }
    },
  },
  plugins: [],
}

