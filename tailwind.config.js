/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      stillus: ["NeutraBold"],
      body: ["Open Sans", "sans-serif"],
      navbar: ["ABeeZee", "sans-serif"],
      dancing: ["Dancing Script", "cursive"],
      courgette: ["Courgette", "cursive"],
    },
    // colors: {
    //   'blue': '#1fb6ff',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    extend: {},
  },
  plugins: [],
};
