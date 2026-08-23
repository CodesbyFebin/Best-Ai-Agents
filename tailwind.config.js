export default {
  content: [
    "./app/**/*.{js,jsx.ts,tsx}",
    "./src/**/*.{js,jsx.ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        trust: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        cyber: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        india: {
          saffron: '#FF9933',
          white: '#FFFFFF',
          green: '#138808',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
