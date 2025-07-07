// src/themes/theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0D3B66', // Azul escuro institucional
      light: '#1E6091',
    },
    secondary: {
      main: '#9A6AFF', // Roxo técnico para destaque
    },
    background: {
      default: '#F4F6F8', // Fundo neutro claro
      paper: '#FFFFFF',
      black: '#000000',
      light: '#F0F0F0', // Fundo claro para cards e seções
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#5F6368',
      light: '#FFFFFF', // Texto claro para contraste em fundos escuros
      dark: '#000000', // Texto escuro para contraste em fundos claros
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 20px',
          textTransform: 'none',},
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
})

export default theme
