<<<<<<< HEAD
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a1628",
          light: "#152240",
          dark: "#060f1a",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#d4b86a",
          dark: "#a88838",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        luxury: "0 24px 60px rgba(10, 22, 40, 0.12)",
      },
    },
  },
} satisfies Config;
=======
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5f8',
          100: '#d9e9f0',
          200: '#b7d5e3',
          300: '#8fb9cf',
          400: '#5f95b4',
          500: '#3f7999',
          600: '#325f79',
          700: '#2b4d61',
          800: '#284252',
          900: '#263847',
          950: '#152430',
        },
        accent: {
          500: '#d97b25',
          600: '#bf6616',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(21, 36, 48, 0.1)',
      },
      maxWidth: {
        content: '74rem',
      },
    },
  },
};

export default config;
>>>>>>> origin/main
