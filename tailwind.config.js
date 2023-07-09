/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        video: "12px 12px 0px 0px #E64083",
      },
      keyframes: {
        horBounce: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-60px)" },
        },
        verBounce: {
          "0%, 100%": { transform: "translateX(0px)" },
          "33%": { transform: "translateX(50px)" },
          "66%": { transform: "translateX(-50px)" },
        },
        rotateBounce: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        scroll: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-100%)" },
        },
        vibrate: {
          "0%, 100%" : {transform: "rotate(0)"},
          "5%, 15%": {transform: "rotate(20deg)"},
          "10%, 20%": {transform: "rotate(-20deg)"},
          "30%": {transform: "rotate(0)"}
          
         }
      },
      animation: {
        "horBounce-1": "horBounce 8s linear infinite",
        "horBounce-2": "horBounce 10s ease-in  infinite",
        "verBounce-1": "verBounce 10s linear infinite",
        "verBounce-2": "verBounce 16s linear infinite",
        rotateBounce: "rotateBounce 8s linear infinite",
        scroll: "scroll 3s linear infinite",
        vibrate: "vibrate 2s ease infinite"
      },
    },
    colors: {
      "c-pink": "#E64083",
      "c-yellow": "rgb(239 217 91)",
      "c-black": "#141414",
      "black-op-40": "rgba(0,0,0,0.4)",
      ...colors,
    },
  },
  plugins: [],
};
