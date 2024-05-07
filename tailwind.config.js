/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,html}"],
  theme: {
    colors: {
      "040711": "#040711",
      394150: "#394150",
      "4D5562": "#4D5562",
      CDD5E0: "#CDD5E0",
      F9FAFB: "#F9FAFB",
      "3662E3": "#3662E3",
      "7CA9F3": "#7CA9F3",
      "212936cc": "#212936cc",
      "121826cc": "#121826cc",
    },
    backgroundImage: {
      "bg-hero": 'url("./assets/hero_img.jpg")',
    },
    fontFamily: {
      "DM Sans": ['"DM Sans"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
