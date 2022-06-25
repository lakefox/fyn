/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    theme: {
      fontFamily: {
        sans: ["Arial"]
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#E779C1",

          "secondary": "#58C7F3",

          "accent": "#F3CC30",

          "neutral": "#1f2937",

          "base-100": "#000",

          "info": "#53C0F3",

          "success": "#71EAD2",

          "warning": "#F3CC30",

          "error": "#E24056",
        },
      },
    ],
  },
}
