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
    fontFamily: '"Inter", "Montserrat", "Open Sans", sans-serif',
    h1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.02em',
      '@media (max-width:768px)': {
        fontSize: '2.2rem'
      },
      '@media (max-width:480px)': {
        fontSize: '1.8rem'
      }
    },
    h2: {
      fontFamily: '"Inter", sans-serif',
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
    h3: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      letterSpacing: '-0.01em',
      '@media (max-width:768px)': {
        fontSize: '1.3rem'
      },
      '@media (max-width:480px)': {
        fontSize: '1.2rem'
      }
    },
    h4: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      fontSize: '1.25rem',
      letterSpacing: '0em',
      color: '#1e293b'
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
      letterSpacing: '0em',
      color: '#475569'
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      fontSize: '1.125rem',
      letterSpacing: '0em'
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 300,
      fontSize: '0.875rem',
      lineHeight: 1.5
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default theme;