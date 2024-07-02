/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          100: "hsl(172, 67%, 45%)",
          200: " hsl(186, 14%, 43%)",
          300: "hsl(183, 100%, 15%)",
        },
        greyCyan: {
          100: "hsl(189, 41%, 97%)",
          200: "hsl(185, 41%, 84%)",
          300: "hsl(184, 14%, 56%)",
        },
      },
      screens: {
        sm: "300px",
        md: "600px",
        lg: "900px",
      },
    },
  },
  plugins: [],
};
