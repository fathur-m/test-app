/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ctm-white": "#e7e7e7",
        "ctm-blue": "#6A8CBF",
        "ctm-green": "#6BA46A",
        "ctm-black": "#100F0F",
      },
      fontFamily: {
        "ctm-font": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
