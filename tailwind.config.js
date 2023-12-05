// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "5rem",
        "4xl": "12rem",
        "5xl": "16rem",
        "6xl": "20rem",
        "7xl": "24rem",
      },
      text: {
        "2xl": "4rem",
        "3xl": "5rem",
        "4xl": "12rem",
        "5xl": "16rem",
        "6xl": "20rem",
      },
      colors: {
        "dark-gray": "#121212",
      },
    },
  },
  plugins: [],
};
