/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '769px' },
      // => @media (max-width: 769px) { ... }

      'sm': { 'max': '639px' },
    },
    extend: {
      padding: {
        "thumb": "calc(1 / 1.7777777777777777 * 100%)"
      }
    },
  },
  plugins: [],
}