/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#005274',
        'light-blue': '#17A9E2',
        'icon-bg': '#E2F0FF',
      },
    },
  },
  plugins: [],
};
