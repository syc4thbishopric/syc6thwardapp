const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#a52a2a", // Auburn red as the base
          50: "#f5e6e6",
          100: "#eebaba",
          200: "#e39191",
          300: "#d86a6a",
          400: "#cd4949",
          500: "#a52a2a", // Base auburn red
          600: "#942525",
          700: "#7a1f1f",
          800: "#611919",
          900: "#4b1414",
        },        
      },
      spacing: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
}
