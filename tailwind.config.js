/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
        colors: {
            'primary': '#5964E0',
            'primary-light': '#939BF4',
            'white': '#fff',
            'light-gray': '#e9e9e9',
            'gray': '#9daec2',
            'dark-gray': '#6e8098',
            'very-dark-blue': '#19202D',
            'dark-blue': '#303642',
            'midnight': '#121721',
        },
        screens: {
            'tablet': '768px',
            'tablet-xl': '1064px',
            'desktop': '1440px'
        },
      extend: {
        width: {
            '85': '21.25rem'
        }
      },
    },
    plugins: [],
  }