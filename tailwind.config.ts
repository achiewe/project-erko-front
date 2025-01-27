import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        myfont: ['MyFont'],
      },
      screens: {
        'h-sm': { 'raw': '(max-height: 800px)' }, 
        'h-mm': { 'raw': '(max-height: 680px)' }, 
        'h-mn': { 'raw': '(max-height: 660px)' },
        'h-ml': { 'raw': '(max-height: 560px)' },
      },
      textDecorationThickness: {
        1: '0.5px',
        2: '1px',
      },
    },
  },
  plugins: [],
} satisfies Config