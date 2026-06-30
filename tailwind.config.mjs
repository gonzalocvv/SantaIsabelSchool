/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Azul institucional
        primary: {
          DEFAULT: '#1B3A5B',
          700: '#142C45',
          50: '#EAF1F8',
        },
        secondary: '#2C6CA8', // azul medio (links, acentos fríos)
        accent: {
          DEFAULT: '#D99A2B', // dorado vivo (solo decorativo / sobre fondos oscuros)
          300: '#E8B450', // dorado claro para TEXTO sobre fondos azules/tarjetas oscuras (AA)
          600: '#BD8420',
          700: '#8A5E12', // dorado oscuro para TEXTO sobre fondos claros (AA ≥4.5:1)
        },
        cream: '#FBF7EF', // fondo general
        surface: '#FFFFFF', // tarjetas
        ink: '#1A2A3A', // texto sobre crema
        muted: '#5B6B7B', // texto secundario
        edge: '#E7DEC9', // bordes cálidos / divisores
        whatsapp: '#0E7038', // verde con contraste AA para texto/icono blanco
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem', // ~max-w-6xl para el contenedor principal
      },
      borderRadius: {
        card: '1rem', // 16px
      },
      boxShadow: {
        soft: '0 2px 8px rgba(27, 58, 91, 0.06), 0 8px 24px rgba(27, 58, 91, 0.06)',
        lift: '0 4px 12px rgba(27, 58, 91, 0.10), 0 16px 40px rgba(27, 58, 91, 0.10)',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
