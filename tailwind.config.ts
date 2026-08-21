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
