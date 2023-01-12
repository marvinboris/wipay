/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Display', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#fcfee8',
          100: '#f7fbc5',
          200: '#f1f89e',
          300: '#ebf576',
          400: '#e6f356',
          500: '#e0ef31',
          600: '#d4de2d',
          700: '#c2c723',
          800: '#b1af1a',
          900: '#96880b',
        },
        secondary: {
          50: "#eef0f2",
          100: "#d4d9df",
          200: "#b8c0ca",
          300: "#9ba7b5",
          400: "#8593a4",
          500: "#6f8194",
          600: "#627282",
          700: "#515e6c",
          800: "#424b56",
          900: "#2f363e",
        },
        blue: {
          50: '#e3f1fd',
          100: '#bcdbfb',
          200: '#91c5f8',
          300: '#67aff4',
          400: '#4a9ef3',
          500: '#338ef0',
          600: '#3280e1',
          700: '#2e6ece',
          800: '#2b5dbc',
          900: '#243f9c',
        },
        sky: '#B0D0FF',
        night: '#2E5C9E',
        purple: {
          50: '#e8eaf5',
          100: '#c6cae7',
          200: '#a1a8d6',
          300: '#7d86c5',
          400: '#626bb9',
          500: '#4951ad',
          600: '#4349a3',
          700: '#3a3f97',
          800: '#32358b',
          900: '#262375',
        },
        pink: {
          50: '#fae4fb',
          100: '#f1bbf5',
          200: '#e88af0',
          300: '#dd51ea',
          400: '#d400e5',
          500: '#c500d9',
          600: '#b400d4',
          700: '#9d00ce',
          800: '#8800c8',
          900: '#5e00bd',
        },
        orange: '#F59C1C',
        red: '#dc3545',
      },
      linearBorderGradients: theme => ({
        colors: theme('colors'),
      }),
    },
  },
  plugins: [
    require('tailwindcss-border-gradients')(),
  ],
}
