/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'sspb-dark': '#011242',
        'sspb-blue': '#0a1f5e',
      },
    },
  },
  plugins: [],
}