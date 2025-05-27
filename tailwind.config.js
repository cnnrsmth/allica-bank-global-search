/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        allica: {
          navy: '#0A2240',
          lightNavy: '#0F2D52',
          orange: '#FF6B18',
          blue: '#4169E1',
          background: '#F8F9FC',
          border: '#E5E7EB',
        },
      },
      maxWidth: {
        'container': '1400px',
      },
      spacing: {
        'header': '3rem',
      },
    },
  },
  plugins: [],
};