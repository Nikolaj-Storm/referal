/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gray: {
          1: '#F1ECFF',
          2: '#F9F9FA',
          3: '#8F92A1',
        },
        black: {
          1: '#000000',
          2: '#171717',
          3: '#212121',
          4: '#272727',
          5: '#222222',
          6: '#1b1b1b',
          7:'#3a3a3a',
        },
        white: {
          1: '#ffffff',
          2: '#D4D4DA',
        },
        purple: {
          1: '#7B53E7',
          2:'#8159EC',
        },
        blue: {
          1: '#0052CC',
        },
      },
      backgroundImage: {
        gettingPrintumo: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1170' height='350' viewBox='0 0 1170 350' fill='none'%3E%3Cpath opacity='0.15' d='M0 0H1170V350H0V0Z' fill='url(%23paint0_linear_658_6023)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_658_6023' x1='-20.3125' y1='34.528' x2='978.73' y2='744.957' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235799EB'/%3E%3Cstop offset='1' stop-color='%239F74FB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
      },
      screens: {
        '2xl': '1440px',
        '3xl':'1660px'
      },
      boxShadow: {
        headerboxshadow: '4px 10px 20px 0px rgba(199, 199, 199, 0.3)',
        publishShadow:'0px 4px 62px -3px #9EA4B426'
      },
    },
  },
  plugins: [],
};
