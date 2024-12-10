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
        'custom-gradient': 'linear-gradient(90deg, #2662c3, #ABF44E)',
        'hero-image': "url('/bg-hero.png')", 
        'solutions-image': "url('/bgbg.png')", 
        'contact-image': "url('/contact.jpeg')", 

      }
    },
  },
  plugins: [],
}
