/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        medbg: "#1A6C79",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), "@tailwindcss/aspect-ratio",
  require('flowbite/plugin'),
],
darkMode: 'class',
};
