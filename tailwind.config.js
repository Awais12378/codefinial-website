/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          main: 'var(--color-background)',
          secondary: 'var(--color-background)',
          card: 'var(--color-card)',
        },
        accent: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
        },
        text: {
          main: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
