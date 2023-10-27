/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(292deg, rgba(1,108,161,1) 16%, rgba(0,36,149,1) 69%)',
      },
    },
  },
  plugins: [],
}