import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: colors.gray[950],
        light: colors.violet[50],
        primary: colors.violet[500],
        secondary: colors.violet[800],
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        'material-symbols': ['"Material Symbols Outlined"', 'sans-serif'],
      },
      boxShadow: {
        right: '8px 0 16px colors.violet[300]',
      },
    },
  },
  plugins: [],
};
