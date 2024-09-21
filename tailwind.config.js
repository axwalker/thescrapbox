/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./_layouts/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
    container: false,
  },
  blocklist: [
    'collapse',
  ],
}
