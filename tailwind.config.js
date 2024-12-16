/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    letterSpacing: {
      widest: '1.5rem',
      wider: '1rem',
      wide: '0.5rem',
      normal: '0rem'
    },
    extend: {
      screens: {
        medium: '876px',
        mb: '540px',
        mini: '440px'
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        contacts: ['Open-Sans', 'ui-sans-serif', 'system-ui'],
        title: ['SFFlorencesansSCBlack', 'ui-sans-serif', 'system-ui'],
        titleAbout: ['Florencesans SC', 'ui-sans-serif', 'system-ui'],
        mainTitle: ['Microsoft Yi Baiti', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: '#131313',
        secondary: '#7A2E2F',
        bg: '#C9C8C9',
        contacts: '#fff'
      },
      container: {
        center: true,
        padding: "10px",
        screens: {
          DEFAULT: '1240px'
        }
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'a': {
          outline: 'none'
        }
      })
    }
  ],
}

