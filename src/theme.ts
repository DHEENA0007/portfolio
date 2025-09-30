import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb',
      light: '#1a1a1a',
      dark: '#000000',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#64748b',
      light: '#2d2d2d',
      dark: '#0d0d0d',
      contrastText: '#ffffff'
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
      contrastText: '#ffffff'
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
      contrastText: '#ffffff'
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
      contrastText: '#ffffff'
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff'
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    }
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      '@media (max-width:768px)': {
        fontSize: '2.5rem'
      },
      '@media (max-width:480px)': {
        fontSize: '2rem'
      }
    },
    h2: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      '@media (max-width:768px)': {
        fontSize: '2rem'
      },
      '@media (max-width:480px)': {
        fontSize: '1.6rem'
      }
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '0.02em',
      '@media (max-width:768px)': {
        fontSize: '1.6rem'
      },
      '@media (max-width:480px)': {
        fontSize: '1.4rem'
      }
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '0.05em',
      color: '#1e293b'
    },
    h6: {
      fontFamily: '"Caveat", cursive',
      fontWeight: 500,
      fontSize: '1.2rem',
      letterSpacing: '0em',
      color: '#475569'
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
      fontSize: '1.3rem',
      letterSpacing: '0.02em'
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.7
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 300,
      fontSize: '0.9rem',
      lineHeight: 1.6
    },
    button: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      fontSize: '0.9rem'
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default theme;