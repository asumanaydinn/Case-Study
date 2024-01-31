/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#52525b',
              '&:hover': {
                color: '#3B82F6',
              },
            },
          },
        },
      },
      maxWidth: {
        container: '1440px',
      },
      maxHeight: {
        'sm-screen': 'calc(100vh - 120px)',
      },
      colors: {
        brand: {
          DEFAULT: '#3B82F6',
          50: '#F5F9FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
      },
      aspectRatio: {
        '16/10': '16 / 10',
      },
      lineHeight: {
        64: '4rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
