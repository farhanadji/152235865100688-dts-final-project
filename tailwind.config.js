/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 5px 8px rgba(0, 0, 0, 0.35)",
        "4xl": ["0 10px 10px rgba(0, 0, 0, 0.45)"],
      },
    },
  },
  plugins: [],
};
