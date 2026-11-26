/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#123D2D',
        secondary: '#0C3023',
        accent: '#B7F500',
        white: '#FFFFFF',
        offWhite: '#F6F7F3',
        lightGrey: '#E9ECE7',
        textPrimary: '#17221C',
        textSecondary: '#68736C',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
