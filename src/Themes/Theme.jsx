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
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#5F6368',
    },
  },
  typography: {
    fontFamily: `'Inter', sans-serif`, // Corpo padrão
    h1: {
      fontFamily: `'Poppins', sans-serif`,
      fontSize: '2.6rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: `'Poppins', sans-serif`,
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 20px',
        },
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
