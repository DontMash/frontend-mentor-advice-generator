/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,svelte}'
  ],
  theme: {
    extend: {
      animation: {
        'pop': 'pop 1s ease-in-out'
      },
      boxShadow: {
        'glow': '0 0 32px -4px rgba(0, 0, 0, 0.3)'
      },
      keyframes: {
        'pop': {
          '0%, 100%': {
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            'transform': 'translateY(-10%) scale(1.05)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        }
      }
    },
    colors: {
      'light-cyan': '#cee3e9',
      'neon-green': '#52ffa8',
      'grayish-blue': '#4e5d73',
      'dark-grayish-blue': '#323a49',
      'dark-blue': '#1f2632',
    },
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
};
