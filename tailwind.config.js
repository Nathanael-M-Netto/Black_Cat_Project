/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          light: '#a3e635',
          dark: '#d9f99d',
        },
        header: '#121212',
        
        light: {
          // ALTERAÇÃO AQUI: Cor de fundo alterada para um branco mais suave.
          background: '#f1f5f9', // slate-100
          card: '#ffffff',       // Cards continuam brancos para manter o contraste.
          text: '#0f172a',
          subtle: '#64748b',
        },
        dark: {
          background: '#27272a',
          card: '#0F0F0F',
          text: '#e2e8f0',
          subtle: '#94a3b8',
        },

        // ALTERAÇÃO AQUI: Cor do arco atualizada para o novo fundo claro.
        arc_light: '#f1f5f9',
        arc_dark: '#27272a',

        'footer-arc-light': '#0F0F0F',
        'footer-arc-dark': '#f8fafc',
      },
    },
  },
  plugins: [],
}
