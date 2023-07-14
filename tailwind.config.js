/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      scale: {
        '175': '1.75',
      },
      margin: {
        '400': '400px',
      },
    },
  },
  plugins: [],
}

