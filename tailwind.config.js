module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "customblue": "#2734ed"
      },
      boxShadow: {
        "customb": '0px 5px 20px 0px darkblue',
        "custombr": '10px 10px 20px 0px darkblue',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
