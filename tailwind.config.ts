import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
        xs: '380px',
        sm: '640px',
        md: '768px',
        lg: '1025px',
        xl: '1440px',
        '2xl': '1536px',
    },
    keyframes: {
        shimmer: {
            '0%': {
                'background-position': '0 0',
            },
            '100%': {
                'background-position': '-200% 0',
            },
        },
    },
    animation: {
        shimmer: 'shimmer 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
  },
  plugins: [],
};
export default config;
