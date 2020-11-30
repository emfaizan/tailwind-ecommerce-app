module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#d5814c',
        secondary: '#ffdb8a',
        dark: '#231f20',
        light: '#FFF8EA'
      },
      fontFamily: {
        'europa': 'europa-regular',
        'tenor': 'Tenor Sans'
      }, 
      fontSize: {
        '6xl': '3.81rem',
        '7xl': '4.35rem',
        '8xl': '5.5rem',
        '1-5rem': '1.5rem',
        '2rem': '2rem',
        '2-5rem': '2.5rem',
        '2-75rem': '2.75rem',
        '3-5rem': '3.5rem',
        '4rem': '4rem'
      },
      spacing: {
        '9-25rem': '9.25rem',
        '22rem': '22rem',
        '30rem': '30rem',
        '35rem': '35rem',
        '40rem': '40rem'
      },
      backgroundSize: {
       '50': '50%',
       '100': '100%',
       'h100': 'auto 100%',
       'h100px': 'auto 100px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
