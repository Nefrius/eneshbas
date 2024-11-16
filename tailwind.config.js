/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Tüm src dizinindeki HTML ve JS dosyaları
    "./*.html"          
  ],
  theme: {
    extend: {

      animation: {
        'fade-in': 'fadeIn 1s ease-in-out', // fade-in animasyonu
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

    },
  },
  plugins: [
    require('tailwindcss-motion'),
  ],
};
