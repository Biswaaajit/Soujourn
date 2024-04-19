/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#DC8409",
      },
      fontFamily: {
        logoType: "Dancing Script, cursive",
      },
    },
  },
  plugins: [],
};
