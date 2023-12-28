/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      'md':{'max':'766px'}
    },
    extend: {
      'width': {
        '150': '9.375rem',
      },
      'flex-direction': {
        'col': 'column',
      },
      'margin':{
        '21':'5.25rem',
        '28':'7rem',
      },
      'padding':{
        '10':'2.5rem',
        '25': '6.25rem',
        '80':'20rem',
      },

    },
  },
  plugins: [],
}

