/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        video: '12px 12px 0px 0px #E64083'
      },
      keyframes: {
        'horBounce': {
          '0%, 100%' : { transform: 'translateY(0px)'},
          '50%' : {transform: 'translateY(-60px)'}
        },
        'verBounce': {
          '0%, 100%' : { transform: 'translateX(0px)'},
          '33%' : {transform: 'translateX(50px)'},
          '66%' : {transform: 'translateX(-50px)'},
        },
        'rotateBounce': {
          '0%' : { transform: 'rotate(0deg)'},
          '100%' : {transform: 'rotate(180deg)'}
        },
      },
      animation: {
        'horBounce-1': 'horBounce 8s linear infinite',
        'horBounce-2': 'horBounce 10s ease-in  infinite',
        'verBounce-1': 'verBounce 10s linear infinite',
        'verBounce-2': 'verBounce 16s linear infinite',
        'rotateBounce': 'rotateBounce 8s linear infinite',
      }
    },
    colors: {
      'c-pink': "#E64083",
      'c-yellow' : "rgb(239 217 91)",
      'c-black' : "#141414",
      ...colors,
    },
  },
  plugins: [],
};
