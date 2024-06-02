/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      alignItems: {
        start: "start",
      },
      fontFamily: {
        firaCode: ["Fira Code", "monospace"],
      },
      colors: {
        gray: "#abb2bf",
        primary: "#c778dd",
      },
      backgroundColor: {
        primary: "#c778dd",
        color: "#282c33",
      },
      spacing: {
        0.25: "0.0625rem",
        0.5: "0.125rem",
        38: "9.5rem",
        19: "4.75rem",
        76: "19rem",
      },
      width: {
        "min-content": "min-content",
      },
      gridTemplateColumns: {
        skills: "5fr 5fr 6fr",
      },
    },
  },
  plugins: [],
};
