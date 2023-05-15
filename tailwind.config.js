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
          69: '#113C5D',
        },
        muted: {
          420: '#999BAF',
        }

      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

