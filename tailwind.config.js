module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primaryColor: '#06AB0D',
        primaryBlack: '#2B2929',
        secondaryColor: '#FF0000',
        primaryGray: '#747272',
        primaryBlue: '#0066FF',
        secondaryGray: '#5A7889',
      },
      width:{
        11.33: '11.33px',
        30.91: '30.91px',
        33.59: '33.59px',
        91: '91px',
        167: '167px',
        172: '172px',
        349: '349px',
        377: '377px',
        391: '391px',
        525: '525px',
        553: '553px',
        595: '595px',
        617: '617px',
      },
      height:{
        17: '17px',
        30.91: '30.91px',
        33.59: '33.59px',
        60: '60px',
        67: '67px',
        72: '72px',
        88: '88px',
        91: '91px',
        114: '114px',
        144: '144px',
        308: '308px',
        349: '349px',
        500: '500px',
        616: '616px',
      },
      fontWeight:{
        400: '400',
        500: '500',
        700: '700',
      },
      fontSize:{
        8: '8px',
        13: '13px',
        14: '14px',
        18: '18px',
        24: '24px',
        36: '36px',
        64: '64px',
      },
      fontFamily: {
        RatDisplay:['Red Hat Display', 'sans-serif'],
        RatText: [ 'Red Hat Text', 'sans-serif'],
        SourceCode: [ 'Source Code Pro', 'monospac']
      },
      boxShadow: {
        primaryShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
        secondaryShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
      },
      borderRadius:{
        20: '20px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
