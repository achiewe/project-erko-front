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
        'h-mx': { 'raw': '(max-height: 855px)' },
        'h-sm': { 'raw': '(max-height: 800px)' },
        'h-sv': { 'raw': '(max-height: 760px)' },  
        'h-mm': { 'raw': '(max-height: 680px)' }, 
        'h-mn': { 'raw': '(max-height: 660px)' },
        'h-mw': { 'raw': '(max-height: 600px)' },
        'h-ml': { 'raw': '(max-height: 560px)' },
      },
      keyframes: {
        scrollText: {
          "0%": { transform: "translateX(-100%)" }, 
          "100%": { transform: "translateX(100%)" }, 
        },
      },
      // Add the animation utility
      animation: {
        scrollText: "scrollText 10s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config