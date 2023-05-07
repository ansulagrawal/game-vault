/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'card-1': 'card-1 1s ease-in-out infinite',
        'card-2': 'card-2 1s ease-in-out infinite',
        'card-0': 'card-0 1s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'wiggle-one': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'card-1': {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        'card-2': {
          '0%': { transform: 'translate(-100%)', opacity: 0 },
          '100%': { transform: 'translate(0%)', opacity: 100 },
        },
        'card-0': {
          '0%': { transform: 'translate(-200%)', opacity: 0 },
          '100%': { transform: 'translate(0%)', opacity: 100 },
        },
        wiggle: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 100 },
        },
        'wiggle-one': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 100 },
        },
      },
    },
  },
  plugins: [],
};
