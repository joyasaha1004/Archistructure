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
      backgroundImage: {
      
          'hero-pattern': "url('../Assets/build5.jpg')",
          'new-project' : "url('../Assets/build.jpg')",
        // 'restaurant-pic' : "url('../Assets/restaurant_bg.png')",
        // 'footer-pic' : "url('../Assets/footer.png')",
        // 'offer-pic' : "url('../Assets/offer_bg.png')",
        //  'menu' : "url('../Assets/menu_bg.png')",
        // 'reservation-bg': "url('../Assets/reservation1.png')",
        // 'wood-bg': "url('../Assets/wood_bg.png')",
        // 'contact-bg':"url('../Assets/contact_bg.png')",
       
      }
    },
  },
  plugins: [],
}

