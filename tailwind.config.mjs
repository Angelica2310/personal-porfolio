/** @type {import('tailwindcss').Config} */
export default {
  media: false, // disable dark mode entirely
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0%, 100%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(0%, 20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        fadein: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeout: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(10deg)",
          },

          "75%": {
            transform: "rotate(-10deg)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        glow: {
          "0%": {
            backgroundColor: "#fcfcfd",
          },
          "30%": {
            backgroundColor: "#fff6cd",
          },
          "100%": {
            backgroundColor: "#fcfcfd",
          },
        },
        shine: {
          "0%": { transform: "translateX(-150%) rotate(12deg)" },
          "100%": { transform: "translateX(300%) rotate(12deg)" },
        },
        zoomin: {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "100%": {
            opacity: "1",
            transform: "scale3d(1, 1, 1)",
          },
        },
        "fadein-bounce": {
          "0%": { opacity: "0", transform: "scale(0.95) translateY(0)" },
          "50%": { opacity: "1", transform: "scale(1) translateY(-10%)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 3s ease-in-out 0.25s 1 backwards",
        tada: "tada 1s ease-in-out 0.25s infinite",
        bounce: "bounce 2.5s ease-in-out infinite",
        fadein: "fade-in 0.15s linear",
        wiggle: "wiggle 0.8s ease 0.25s infinite",
        fadeout: "fade-out 1s ease-out 0.25s 1",
        meteorEffect: "meteor 5s linear infinite",
        glow: "glow 0.6s ease-in-out 0.25s 1",
        shine: "shine 2s linear infinite",
        zoomin: "zoomin 0.6s ease-out forwards",
        fadeinbounce: "fadein-bounce 4s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        jobroles: {
          words: [
            "Software Developer",
            "Enthusiastic About Technology & Problem Solving",
          ],
          delay: 3,
          writeSpeed: 0.1,
        },
      },
    }),
  ],
};
