/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          100: "#fffefe",
          200: "#fffdfd",
          300: "#0e0e0e",
          400: "#0c0c0c",
          500: "#110101",
          600: "rgba(0, 0, 0, 0.13)",
          700: "rgba(255, 255, 255, 0.8)",
          800: "rgba(0, 0, 0, 0.8)",
          900: "rgba(0, 0, 0, 0.75)",
          1000: "rgba(255, 255, 255, 0.75)",
          1100: "rgba(255, 255, 255, 0.4)",
        },
        black: "#000",
        gainsboro: {
          100: "#d9d9d9",
          200: "rgba(217, 217, 217, 0.36)",
          300: "rgba(217, 217, 217, 0.33)",
        },
        darkslateblue: "#3c53a5",
        darkslategray: "#404040",
        whitesmoke: "#f3f3f3",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "radio-canada": "'Radio Canada'",
        inherit: "inherit",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "6xs": "7px",
      },
    },
    fontSize: {
      "17xl": "2rem",
      "10xl": "1.61rem",
      "3xl": "1.22rem",
      xl: "1.11rem",
      base: "0.89rem",
      "13xl": "1.78rem",
      "7xl": "1.44rem",
      lgi: "1.06rem",
      "11xl": "1.67rem",
      "5xl": "1.33rem",
      lg: "1rem",
      xs: "0.67rem",
      sm: "0.78rem",
      mini: "0.83rem",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
