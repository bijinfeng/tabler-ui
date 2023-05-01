// eslint-disable-next-line import/no-extraneous-dependencies
const plugin = require('tailwindcss/plugin');

const themeColors = {
  blue: '#206bc4',
  azure: '#4299e1',
  indigo: '#4263eb',
  purple: '#ae3ec9',
  pink: '#d6336c',
  red: '#d63939',
  orange: '#f76707',
  yellow: '#f59f00',
  lime: '#74b816',
  green: '#2fb344',
  teal: '#0ca678',
  cyan: '#17a2b8',
};

const grayColors = {
  50: '#fcfdfe',
  100: '#f6f8fb',
  200: '#eef1f4',
  300: '#dadfe5',
  400: '#bbc3cd',
  500: '#929dab',
  600: '#667382',
  700: '#3a4859',
  800: '#182433',
  900: '#040a11',
};

const textColors = {
  'muted': grayColors[600],
  'muted-light': grayColors[500],
  'muted-dark': grayColors[700],
};

module.exports = plugin(() => {}, {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',

        primary: themeColors.blue,
        secondary: textColors.muted,
        success: themeColors.green,
        info: themeColors.azure,
        warning: themeColors.orange,
        danger: themeColors.red,

        ...themeColors,
        ...textColors,
        ...grayColors,
      },
      backgroundImage: {
        check:
          "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8.5l2.5 2.5l5.5 -5.5'/%3e%3c/svg%3e')",
      },
    },
  },
});
