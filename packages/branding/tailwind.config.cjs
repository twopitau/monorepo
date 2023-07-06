/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      mono: ['fira-mono', 'monospace'],
      sans: ['poppins', 'sans-serif'],
      serif: ['liberation-serif', 'serif'],
    },
    extend: {
      colors: {
        /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
        info: colors.sky,
        warn: colors.amber,
        error: colors.red,
        success: colors.teal,
        primary: colors.pink,
        secondary: colors.purple,
        /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
      },
    },
  },
};
