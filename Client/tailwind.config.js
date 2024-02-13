/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'header':'#0F4C75',
        'navbar':'#3282B8',
        'backg' : '#BBE1FA'
      }
    },
  },
  plugins: [],
}

