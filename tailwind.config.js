const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      "smph": "360px",
      "lgph": "420px",
      ...screens
    },
    extend: {
      colors: {
        "customdarkpurple": "#3d348b",
        "customlightpurple": "#7678ED",
        "customyellow": "#F7B801",
        "customred": "#D00000", //E63946 //BA274A  //D00000
        "customgreen": "#14CC61" //09BC8A //27FB6B //14CC61
      },
      boxShadow: {
        "customt": '0px -5px 20px rgba(0 0 0 / 0.4)',
        "customb": '0px 5px 20px rgba(0 0 0 / 0.4)',
        "custombr": '10px 10px 20px rgba(0 0 0 / 0.4)'
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
  plugins: [],
}
