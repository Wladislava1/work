/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        background: '#F3F4F6', // Светло-серый фон
        primary: '#1976d2',    // Акцентный синий
        secondary: '#00396a',  // Темно-синий текст
        neutral: '#64748b',    // Серый для вторичного текста
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}