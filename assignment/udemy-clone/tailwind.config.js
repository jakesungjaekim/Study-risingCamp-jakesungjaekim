/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      xs: '460px',
      'xs1': '601px',
      sm: '640px',
      'sm1': '701px',
      md: '801px',
      'md1': '921px',
      lg: '981px',
      'lg1': '1081px',
      xl: '1201px',
      'xl1':'1350px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        black1: '#1c1d1f',

        violet1: '#5624d0',

        grey1: '#6a6f73',
        grey2: '#f7f9fa',

        brown1: '#3d3c0a',

        yellow1: '#eceb98'
      },
      backgroundImage: {
        'desc': "url('https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg"
      }

    },
  },
  plugins: [],
}

