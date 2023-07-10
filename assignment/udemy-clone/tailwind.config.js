/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        black1: '#1c1d1f',

        violet1: '#5624d0',

        grey1: '#6a6f73',

        brown1: '#3d3c0a',

        yellow1: '#eceb98'
      }
    },
  },
  plugins: [],
}

