/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{vue,js,ts,jsx,tsx}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'tighter': '-0.025em',
        'tight': '-0.015em',
      },
      colors: {
        space: {
          950: '#050507',
          900: '#09090c',
          850: '#0f1015',
          800: '#15161e',
          700: '#212330'
        },
        apple: {
          blue: '#0a84ff',
          indigo: '#5e5ce6',
          purple: '#bf5af2',
          teal: '#64d2ff',
          cyan: '#70d7ff',
          emerald: '#30d158',
          amber: '#ffd60a',
          rose: '#ff375f'
        }
      },
      transitionTimingFunction: {
        'apple-spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'apple-smooth': 'cubic-bezier(0.32, 0.72, 0, 1)'
      },
      boxShadow: {
        'apple-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'apple-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'apple-glow': '0 0 50px -10px rgba(99, 102, 241, 0.25)',
        'apple-glow-cyan': '0 0 50px -10px rgba(6, 182, 212, 0.25)',
        'apple-border-top': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.12)'
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'glow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-spin': 'glow-spin 12s linear infinite'
      }
    }
  },
  plugins: []
}
