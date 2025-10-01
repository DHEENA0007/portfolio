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
      default: 'linear-gradient(135deg, #fef9f5 0%, #fff8f3 50%, #fef9f5 100%)',
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
    fontFamily: '"Plus Jakarta Sans", "DM Sans", sans-serif',
    h1: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontWeight: 400,
      fontSize: '4rem',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      '@media (max-width:768px)': {
        fontSize: '3rem'
      },
      '@media (max-width:480px)': {
        fontSize: '2.5rem'
      }
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 800,
      fontSize: '2.8rem',
      letterSpacing: '-0.01em',
      '@media (max-width:768px)': {
        fontSize: '2.2rem'
      },
      '@media (max-width:480px)': {
        fontSize: '1.8rem'
      }
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
      '@media (max-width:768px)': {
        fontSize: '1.6rem'
      },
      '@media (max-width:480px)': {
        fontSize: '1.4rem'
      }
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '0.01em',
      color: '#1e293b'
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      fontSize: '1.3rem',
      letterSpacing: '0.02em'
    },
    h6: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
      fontSize: '1.2rem',
      letterSpacing: '0em',
      color: '#475569'
    },
    body1: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.7
    },
    body2: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
      fontSize: '0.9rem',
      lineHeight: 1.6
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      fontSize: '0.9rem'
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default theme;