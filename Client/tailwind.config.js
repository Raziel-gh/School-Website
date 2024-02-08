/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'header':'#1B262C',
        'navbar':'#0F4C75',
        'backg' : '#BBE1FA'
      }
    },
  },
  plugins: [],
}

