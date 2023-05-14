/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          420: '#1989AD',
        }
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

