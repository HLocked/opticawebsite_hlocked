/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          gray: '#1A1A1A',
          white: '#FFFFFF',
          'off-white': '#F4F5F7',
          'dark-bg': '#1a1919',
          'light-bg': '#FCFCFF',
        },
      },
      fontFamily: {
        'tobias': ['Tobias', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'monument-semi-mono': ['Monument Grotesk Semi-Mono', 'ui-monospace', 'Cascadia Code', 'Source Code Pro', 'Menlo', 'Consolas', 'DejaVu Sans Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}


