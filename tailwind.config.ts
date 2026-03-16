import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0b1020',
        accent: '#6366f1',
        accentSoft: '#312e81'
      },
      boxShadow: {
        'soft-elevated': '0 18px 45px rgba(15,23,42,0.75)'
      }
    }
  },
  plugins: []
};

export default config;

