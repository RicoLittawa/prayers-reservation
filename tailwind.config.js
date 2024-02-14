const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ls900: ["league-900", "sans-serif"],
        ls700: ["league-700", "sans-serif"],
        ls600: ["league-600", "sans-serif"],
        lb700: ["libre-700", "sans-serif"],
        lb400: ["libre-400", "sans-serif"],
      },
      colors: {
        lightBlue: "#A9BDD6",
        light: "#FAF8F9",
        dark: "#0F2036",
        orange: "#CC5B0B",
        gray:"#3F5B7C"
      },
    },
  },
  plugins: [],
});
