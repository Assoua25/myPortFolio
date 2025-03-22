import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-clr)',
          light: 'var(--primary-light-clr)',
          dark: 'var(--primary-dark-clr)'
        },
        secondary: {
          DEFAULT: 'var(--secondary-clr)',
          light: 'var(--secondary-light-clr)',
          dark: 'var(--secondary-dark-clr)'
        },
        light: 'var(--light-clr)',
        destructive: 'var(--destructive)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)'
      },
      fontFamily: {
        'space-grotesk': 'var(--font-space-grotesk)',
        'clash-display': 'var(--font-clash-display)',
        chillax: 'var(--font-chillax)'
      }
    }
  },
  plugins: []
} satisfies Config
