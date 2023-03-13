/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        rain: "url('/bk-images/rain-background-2.jpg')",
      },
    },
  },
  plugins: [],
};
