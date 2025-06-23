/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        blue950: "#10141E",
        blue900: "#161D2F",
        blue500: "#5A698F",
        primary: "#FC4747",
      },
    },
  },
  plugins: [],
};
