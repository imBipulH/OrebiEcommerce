/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      maxWidth: '1604px',
      center: true
    },
    extend: {
      maxWidth: {
        container: '1604px'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      },
      colors: {
        primary: '#262626',
        secondary: '#767676'
      }
    }
  },
  plugins: []
}
