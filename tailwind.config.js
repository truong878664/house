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
          "0%, 100%": { transform: "rotate(0)" },
          "5%, 15%": { transform: "rotate(20deg)" },
          "10%, 20%": { transform: "rotate(-20deg)" },
          "30%": { transform: "rotate(0)" },
        },
        "vibrate-2": {
          "0%, 100%": { transform: "rotate(0)" },
          "5%, 20%": { transform: "rotate(3deg)" },
          "15%, 35%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(0)" },
        },
        "rotate3d-y": {
          "0%": { transform: "rotateY(90deg)" },
          "100%": { transform: "rotateY(00deg)" },
        },
        "rotate3d-x": {
          "0%": { transform: "rotateX(90deg)" },
          "100%": { transform: "rotateX(00deg)" },
        },
        "show-center": {
          "0%": {
            transform: "scale(50%)",
            opacity: "0%",
          },
          "100%": {
            transform: "scale(100%)",
            opacity: "100%",
          },
        },
      },
      animation: {
        "horBounce-1": "horBounce 8s linear infinite",
        "horBounce-2": "horBounce 10s ease-in  infinite",
        "verBounce-1": "verBounce 10s linear infinite",
        "verBounce-2": "verBounce 16s linear infinite",
        "horBounce-1s": "horBounce 7s linear 1s infinite",
        "horBounce-700ms": "horBounce 5s linear 700ms infinite",
        rotateBounce: "rotateBounce 8s linear infinite",
        scroll: "scroll 3s linear infinite",
        vibrate: "vibrate 2s ease 1s infinite",
        "show-center-vibrate":
          "vibrate 2s ease 1s infinite, show-center 1s ease",
        "vibrate-2": "vibrate-2 3s ease infinite",
        "rotate3d-y": "rotate3d-y 1s ease",
        "rotate3d-x": "rotate3d-x 1s ease",
        "show-center": "show-center 1s ease",
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
