module.exports = {
  content: [
    '*.html',
    './src/**/*.html',
  ],

  safelist: [
    'invisible',
  ],

  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {

      minHeight: {
        '100dvh': '100dvh',
      },

      fontWeight: {
        'body-weight': 'var(--font-body-weight)',
        'heading-weight': 'var(--font-heading-weight)',
      },

      lineHeight: {
        body: 'var(--base-body-line-height)',
        heading: '1',
      },

      aspectRatio: {
        'portrait': '1 / 1.25',
      },
    },

    screens: {
      'xs': '320px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1440px',
    },

    container: {
      center: true,
      padding: 'calc(var(--grid-gutter-width) / 2)',
    },

    colors: {
      // Default colors
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      'body-text-color': 'var(--body-text-color)',
    },

    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      '3xs': '16rem',
      '2xs': '18rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
    },

    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      15: '3.75rem',
      16: '4rem',
      17: '4.25rem',
      18: '4.5rem',
      19: '4.75rem',
      20: '5rem',
      21: '5.25rem',
      22: '5.5rem',
      24: '6rem',
      28: '7rem',
      29: '7.25rem',
      30: '7.5rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },

    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
    },

    width: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      '100': '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),

    height: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '100': '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),

    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      101: '101',
      102: '102',
      103: '103',
      104: '104',
      105: '105',
      999: '999',
      1000: '1000',
      1001: '1001',
    },

    zIndex: {
      auto: 'auto',
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      100: '100',
      999: '999',
      1000: '1000',
      1001: '1001',
      1002: '1002',
    },

    fontFamily: {
      'body': 'var(--font-body)',
      'heading': 'var(--font-heading)',
    },

    fontSize: {
      'heading': 'var(--heading-font-size)', 
      'h1': ['var(--heading-font-size)', {                   //36px
        lineHeight: '1.5',
        fontWeight: 'var(--font-heading-weight)',
      }],
      'h1-desktop': 'calc(var(--heading-font-size) + 10px)', //46px
      'h2': ['calc(var(--heading-font-size) - 4px)', {       //32px
        lineHeight: '1.5',
        fontWeight: 'var(--font-heading-weight)',
      }],
      'h2-desktop': 'calc(var(--heading-font-size) + 4px)',  //40px
      'h3': ['calc(var(--heading-font-size) - 10px)', {      //26px
        lineHeight: '1.5',
        fontWeight: 'var(--font-heading-weight)',
      }],
      'h3-desktop': 'var(--heading-font-size)',              //36px
      'h4': ['calc(var(--heading-font-size) - 14px)', {      //22px
        lineHeight: '1.5',
        fontWeight: 'var(--font-heading-weight)',
      }],
      'h4-desktop': 'calc(var(--heading-font-size) - 4px)',  //32px
      'h5': ['calc(var(--heading-font-size) - 16px)', {      //20px
        lineHeight: '1.5',
        fontWeight: 'var(--font-heading-weight)',
      }],
      'h5-desktop': 'calc(var(--heading-font-size) - 10px)',  //26px
      'h6': ['calc(var(--heading-font-size) - 20px)', {       //16px
        lineHeight: '1.5',
        fontWeight: 'var(--font-heading-weight)',
      }],
      'h6-desktop': 'calc(var(--heading-font-size) - 14px)',   //22px
      'title': ['var(--font-size-base)', {
        lineHeight: 'var(--base-body-line-height)',
        fontWeight: '600',
      }],
      'title-desktop': 'calc(var(--font-size-base) + 2px)',
      'body-large': ['calc(var(--font-size-base) + 2px)', {
        lineHeight: 'var(--base-body-line-height)',
        fontWeight: 'var(--font-body-weight)',
      }],
      'body-medium': ['var(--font-size-base)', {
        lineHeight: 'var(--base-body-line-height)',
        fontWeight: 'var(--font-body-weight)',
      }],
      'body-small': ['calc(var(--font-size-base) - 2px)', {
        lineHeight: 'var(--base-body-line-height)',
        fontWeight: 'var(--font-body-weight)',
      }],
      'button-large': ['var(--font-size-base)', {
        lineHeight: '1',
        fontWeight: '600',
      }],
      'button-small': ['calc(var(--font-size-base) - 2px)', {
        lineHeight: '1',
        fontWeight: '600',
      }],
    },

    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.5rem',
      'lg': '0.75rem',
      'xl': '1rem',
      '2xl': '1.5rem',
      '3xl': '3rem',
      'full': '100%',
      'button': 'var(--button-border-radius)',
    },

    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },

  },

  variants: {
    extend: {},
  },

  plugins: [],
};
