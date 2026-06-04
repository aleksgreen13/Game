/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vault: {
          50: '#f0f7f4',
          100: '#d4e8dc',
          200: '#a8d1b9',
          300: '#7cba96',
          400: '#50a373',
          500: '#2d6b4f',
          600: '#245840',
          700: '#1b4531',
          800: '#123222',
          900: '#091f14',
          950: '#040f0a',
        },
        earth: {
          50: '#faf6f1',
          100: '#f0e6d3',
          200: '#e0cba7',
          300: '#d0b07b',
          400: '#c0954f',
          500: '#a07832',
          600: '#806028',
          700: '#60481e',
          800: '#403014',
          900: '#20180a',
        },
        mystic: {
          50: '#eef5fa',
          100: '#d0e3f0',
          200: '#a1c7e1',
          300: '#72abd2',
          400: '#438fc3',
          500: '#2a6f9e',
          600: '#22587e',
          700: '#1a415e',
          800: '#122a3e',
          900: '#0a131e',
        },
        glow: {
          green: '#4ade80',
          gold: '#fbbf24',
          blue: '#60a5fa',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
