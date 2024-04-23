/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "rgba(116, 108, 255, 1)",
        white: "rgba(255, 255, 255, 1)",
        black: "rgba(0, 0, 0, 1)",
        darkwhite: "rgba(232, 234, 236, 0.5)",
        red: "rgba(255, 81, 81, 1)",
        grey: "rgba(128, 125, 126, 1)",
        brown: "rgba(68, 68, 68, 1)",
        bordercolor: "rgba(189, 217, 255, 1)",
        darkblue: "rgba(22, 30, 84, 1)",
        lighblue: "rgba(74, 150, 255, 0.2)",
        lightblue2: "rgba(81, 40, 167, 0.1)",
      },
      fontFamily: {
        sans: ["sans-serif"],
        Poppins: ["Poppins"],
        Noto: ["Noto Sans"],
        Nunito: ["Nunito Sans"],
        DmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
