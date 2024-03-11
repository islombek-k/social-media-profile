/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        170: "170px",
      },
      colors: {
        secondary: "#344154",
        primary: "#010812",
        inputBg: "#F6F7FA",
        inputBorder: "#E3E6EE",
      },
    },
  },
  plugins: [],
};
