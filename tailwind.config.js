/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Neue Haas Grotesk', 'Helvetica', 'sans-serif'],
      serif: ['Garamond', 'serif'],
      mono: ['Courier New', 'monospace'],
    },
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        black: '#010101',
        white: '#ffffff',
        gray: {...defaultTheme.colors.gray, 150: '#EBEDF0', 250: '#404040', 350: '#6B6B6B'},
        blue: {
          50: '#E6EDF9',
          100: '#a6c462',
          200: '#a6c462',
          300: '#a6c462',
          400: '#a6c462',
          500: '#a6c462',
          600: '#a6c462',
          700: '#162A4A',
          800: '#11213B',
          900: '#0D192C',
        },
        red: {
          100: '#EBBAB8',
          200: '#DF8D8A',
          300: '#D25F5B',
          400: '#C5312C',
          500: '#BF1B15',
          600: '#AB1812',
          700: '#85120E',
          800: '#5F0D0A',
          900: '#390806',
        },
        green: {
          50: '#D3E3DB',
          100: '#BED5C9',
          200: '#93BAA6',
          300: '#679F82',
          400: '#3C835E',
          500: '#27764d',
          600: '#236A45',
          700: '#1F5E3D',
          800: '#17462E',
          900: '#0F2F1E',
        },
        pink: {
          50: '#FAEAF8',
          100: '#F2C1EA',
          200: '#EA98DC',
          300: '#E26ECE',
          400: '#0D192C',
          500: '#0D192C',
          600: '#0D192C',
          700: '#0D192C',
          800: '#0D192C',
          900: '#0D192C',
        }
      },
      fontSize: {
        md: '0.95rem',
        thin: '0.625rem',
      },
      spacing: {
        88: '22rem',
        100: '26rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        DEFAULT: '0.35rem',
        md: '0.45rem',
        lg: '0.55rem',
        full: '9999px',
      },
      blur: {
        xs: '3px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
      transitionProperty: {
        'height': 'height, max-height',
        'spacing': 'margin, padding',
      },
      maxWidth: {
        'xl-1': '39.5rem',
      },
    },
  },
  plugins: [],
};
