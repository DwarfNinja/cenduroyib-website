module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-blue": "#2734ed"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
