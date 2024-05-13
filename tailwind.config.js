/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Inter", sans-serif',
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    extend: {
      screens: {
        'sm':'640px',
        'sm-1':'665px',
        'md': '1023px',
        'lg': '1024px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}



// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });