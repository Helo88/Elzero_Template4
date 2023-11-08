/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#F1F5F9",
      },
      backgroundImage: {
        "welcome": "url('../../images/welcome.png')",
      },
    },
  },
  plugins: [],
};
