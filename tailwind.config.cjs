/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // main HTML file
    "./*.{js,ts,jsx,tsx}",    // root-level React files
    "./components/**/*.{js,ts,jsx,tsx}",  // agar component folder alag hai
    "./pages/**/*.{js,ts,jsx,tsx}",       // agar pages folder hai
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488',
        'primary-dark': '#0F766E',
        secondary: '#F0F9FF',
        accent: '#F97316',
      },
    },
  },
  plugins: [],
};
