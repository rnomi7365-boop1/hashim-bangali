import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        spiritual: {
          dark: '#08080A',
          card: '#101015',
          cardHover: '#16161F',
          border: '#282834',
          gold: '#E5C07B',
          goldLight: '#F7E7C4',
          goldDark: '#B89230',
          burgundy: '#9B111E',
          burgundyLight: '#C41E3A',
          burgundyGlow: 'rgba(196, 30, 58, 0.25)',
          muted: '#9CA3AF',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        marqueeSlow: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
