/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    screens: {
      sm: '300px',
      md: '500px',
      lg: '700px',
      xl: '1000px',
      '2xl': '1500px',
    },

    extend: {
      
    },
  },
  plugins: [],
}

