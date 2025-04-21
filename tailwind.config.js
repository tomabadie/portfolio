export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Satoshi-Variable', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        alt: ['Geist', 'sans-serif'],
      },
      colors: {
        debug: '#ff00ff',
        primary: {
          light: '#ffffff',
          dark: '#05151e',
        },
        secondary: {
          light: '#fafafa',
          dark: '#121e26',
        },
        tertiary: {
          light: '#E4F9FF',
          dark: '#02475E',
        },
      },
      textColor: {
        primary: {
          light: '#ffffff',
          dark: '#05151e',
        },
        secondary: {
          light: '#fafafa',
          dark: '#121e26',
        },
        tertiary: {
          light: '#E4F9FF',
          dark: '#02475E',
        },
      },
      borderColor: {
        primary: {
          light: '#e5e7eb',
          dark: '#373f51',
        },
      },
    },
  },
  plugins: [],
};
