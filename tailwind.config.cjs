/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          dark: "#f54864",
          light: "#f78361",
        },
        gray: {
          dark: "#1F232E",
          light: "#4e586e",
        }
      },
    },
  },
  plugins: [],
}