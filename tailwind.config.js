import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        Container:"1140px"
      },
      fontFamily: {
        'pops': ["Poppins", "sans-serif",]
       
      },
      backgroundImage:{
        'hero-pattern': " url('/src/assets/banner.jpg')"
      }
    },
  },
  plugins: [],
}