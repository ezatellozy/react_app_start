/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    colors: {
      primary: "#C8A45D",
      secondary: "#181E3C",
      third: "#27365C",
      white: "#fff",
      "text-dark": "#697E95",
      black: "#000",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      description: "#697E95",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    screens: {
      sm: "576",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      serif: ["Merriweather", "serif"],
    },
    minHeight: {
      "3/4": "75vh",
    },
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
