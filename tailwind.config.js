/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluee: '#245ebc'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #2662c3, #ABF44E)'
      }
    },
  },
  plugins: [],
}