/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nit: {
          navy: '#002147',
          deep: '#0A192F',
          dark: '#050E1E',
          blue: '#1E3A8A',
          lightBlue: '#3B82F6',
          sky: '#0284C7',
          gold: '#D4AF37',
          goldLight: '#F59E0B',
          accent: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 33, 71, 0.15)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.35)',
        'glow-blue': '0 0 25px rgba(6, 182, 212, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
