import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Defines a new 'manrope' utility class, like 'font-manrope'
        manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
