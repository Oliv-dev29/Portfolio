/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Crimson Text', 'serif'],
        body: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          olive: '#606c38',
          'dark-olive': '#283618',
          cream: '#fefae0',
          sand: '#dda15e',
          brown: '#bc6c25',
        },
        primary: {
          50: '#fefae0',
          100: '#fcf7d4',
          200: '#f9eeb0',
          300: '#e8d8a0',
          400: '#dda15e',
          500: '#bc6c25',
          600: '#a55a1f',
          700: '#8e4a19',
          800: '#763d14',
          900: '#5f3010',
        },
        accent: {
          50: '#f3f5eb',
          100: '#e7ead8',
          200: '#cfd5b1',
          300: '#b8c08a',
          400: '#a0ab63',
          500: '#606c38',
          600: '#4d562d',
          700: '#3a4122',
          800: '#283618',
          900: '#151b0c',
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
