/** @type {import('tailwindcss').Config} */
// Force reload
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: 'var(--minimal-white)',
        minimal: {
          bg: 'var(--minimal-bg)',
          surface: 'var(--minimal-surface)',
          surfaceHover: 'var(--minimal-surfaceHover)',
          border: 'var(--minimal-border)',
          text: 'var(--minimal-text)',
          textHover: 'var(--minimal-textHover)',
          accent: 'var(--minimal-accent)',
          accentHover: 'var(--minimal-accentHover)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
}
