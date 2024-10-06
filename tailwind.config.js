/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "contact-pattern": "url(./src/assets/contactbg.svg)",
      },
    },
  },
  plugins: [],
};
