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
        'h-mn': { 'raw': '(max-height: 600px)' },
      },
    },
  },
  plugins: [],
} satisfies Config