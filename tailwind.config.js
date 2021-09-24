module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "customblue": "#2734ed",
        "customred": "#D5322F",
        "customgreen": "#A1D72D"
      },
      boxShadow: {
        "customt": '0px -5px 20px 0px darkblue',
        "customb": '0px 5px 20px 0px darkblue',
        "custombr": '10px 10px 20px 0px darkblue'
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      inset: {
        "1/10": "10%",
        "1/20": "5%"
      },
      borderWidth: {
        "3": "3px"
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ["focus"]
    },
  },
  plugins: [],
}
