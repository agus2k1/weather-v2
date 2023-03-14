/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        rain: "url('/bk-images/rain-background-2.jpg')",
      },
      animation: {
        openTab: 'openTab 1s ease-in-out forwards',
        closeTab: 'closeTab 1s ease-in-out forwards',
      },
      keyframes: {
        openTab: {
          '0%': { height: '0', opacity: '0' },
          '100%': { height: '13rem', opacity: '1' },
        },
        closeTab: {
          '0%': { height: '13rem', opacity: '1' },
          '100%': { height: '0', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
