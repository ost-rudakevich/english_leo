/** @type {import('tailwindcss').Config} */

const constants = {
  'main-black': '#111116',
  white: '#ffffff',
  black: '#000000',
  // blue: '#2f88e8',
  blue: '#346aff',
  'dark-blue': '#000080',
  gray: '#eae9e5',
  'dark-gray': '#212125',
  red: '#E30B13',
  green: '#2fc58e',
  'dark-green': '#044b2b',
  beige: '#b3aba1',
  'dark-beige': '#a49b8e',
  'white-blue': '#cad7d9',
  brown: '#ad7f56',
  gloome: '#22262f',
  'slate-gray': '#686b72',
  'black-list': '#0f0f17'
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...constants
    },
    extend: {
      width: {
        97: '650px',
        409: '409px',
        450: '450px'
      },
      height: {
        '1/7': '13.3%',
        81: '350px'
      },
      spacing: {
        68: '257px'
      }
    }
  },
  plugins: []
}
