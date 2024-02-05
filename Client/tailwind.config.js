/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'header':'#7D5A5A',
        'navbar':'#F1D1D1',
        'backg' : '#F3E1E1'
      }
    },
  },
  plugins: [],
}

