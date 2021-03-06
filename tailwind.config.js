module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {

       'pattern-pb': "url('/images/pattern-bg.png')",
      }
    },
    colors: { 
      transparent: 'transparent',
      current: 'currentColor',
      White:'#FFFFFF',
      DarkGray: 'hsl(0, 0%, 59%)',
      VeryDarkGray: 'hsl(0, 0%, 17%)',

    },
    fontFamily: {
      'rubik': ['rubik, sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
