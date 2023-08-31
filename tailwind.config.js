/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans'],
        },
        colors: {
          primary: "#868686",
          secondary: "#4E4B4B",
          special: "#D4D4D4",
          specialOne: "#D9D9D9"

        },
        backgroundImage: (theme) => ({
          "banner": "url(/images/Banner.png)",
        })
      },
    },
  },
  plugins: [],
}
