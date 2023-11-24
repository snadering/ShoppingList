/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E6F0F3',
          100: '#C0DDE8',
          200: '#95C7D9',
          300: '#6AACCA',
          400: '#3994BA',
          500: '#05445E', // Original color
          600: '#043A53',
          700: '#033148',
          800: '#02273D',
          900: '#011D32',
        },
        grotto: {
          50: '#E6F7F9',
          100: '#C0EBF2',
          200: '#96DDEB',
          300: '#6ACFDF',
          400: '#42B8D2',
          500: '#189AB4', // Original color
          600: '#13879F',
          700: '#10738B',
          800: '#0C5F76',
          900: '#084B61',
        },
        bluegreen: {
          50: '#E4F8F6',
          100: '#C8F2ED',
          200: '#A8ECE4',
          300: '#84E4D7',
          400: '#5ED9C7',
          500: '#75E6DA', // Original color
          600: '#52D4C6',
          700: '#38BFAF',
          800: '#1FAF9D',
          900: '#0D9C87',
        },
        baby: {
          50: '#F5FDFF',
          100: '#E5FBFF',
          200: '#D5F8FE',
          300: '#C3F4FD',
          400: '#B0EFFB',
          500: '#D4F1F4', // Original color
          600: '#9DD8E8',
          700: '#78C2DC',
          800: '#53AACC',
          900: '#338DBA',
        },
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

