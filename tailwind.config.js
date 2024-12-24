/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./src/**/*.{html,jsx,js}",flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
}

