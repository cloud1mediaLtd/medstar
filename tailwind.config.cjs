/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      scale: {
        "-100": "-1",
      },
      colors: {
        medbg: "#1A6C79",
        medbglight: "#2494a6",
        medbgdark: "#165c67",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    "@tailwindcss/aspect-ratio",
    require("@tailwindcss/line-clamp"),
    require("flowbite/plugin"),
  ],
  darkMode: "class",
};
