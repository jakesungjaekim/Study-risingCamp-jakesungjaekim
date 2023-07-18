/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1540px',
    },
    extend: {
      fontFamily: {
        AirbnbBlack : ['AirbnbCereal-Black', 'sans-serif'],
        AirbnbBold : ['AirbnbCereal-Bold', 'sans-serif'],
        AirbnbBook : ['AirbnbCereal-Book', 'sans-serif'],
        AirbnbLight : ['AirbnbCereal-Light', 'sans-serif'],
        AirbnbMedium : ['AirbnbCereal-Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

