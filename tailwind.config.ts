
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
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme:'#1E1E1E'
      },
      fontFamily:{
        Poppins:["Poppins","sans-serif"]
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
