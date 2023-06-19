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
          420: '#136F8C',
          69: '#113C5D',
          666: '#073050',
          'hover': '#20ADDA'
        },
        offshore: {
          420: '#274F9F',
        },
        backcountry: {
          420: '#05AD9D',
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

