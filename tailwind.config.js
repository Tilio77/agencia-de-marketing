/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-button": "#FEE672"
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': '#FEE672',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}
