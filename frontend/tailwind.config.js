/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#42b9f5",

          "secondary": "#f58a42",

          "accent": "#eeaf3a",

          "neutral": "#291334",

          "base-100": "#faf7f5",

          "info": "#3abff8",

          "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },


  //...
  plugins: [require("daisyui")],

}

