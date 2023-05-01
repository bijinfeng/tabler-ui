/* eslint-disable global-require */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [require('./plugin')],
};
