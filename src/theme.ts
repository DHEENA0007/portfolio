import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8b7ab8',
      light: '#ab9ad8',
      dark: '#6b5b98',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#9b8ac8',
      light: '#bbaae8',
      dark: '#7b6ba8',
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
      default: 'linear-gradient(135deg, #f8f6fc 0%, #f3f0fa 50%, #f8f6fc 100%)',
      paper: '#ffffff'
    },
    text: {
      primary: '#2d1b4e',
      secondary: '#6b5b98'
    },
    grey: {
      50: '#faf9fc',
      100: '#f3f0fa',
      200: '#e8e3f5',
      300: '#d4cce8',
      400: '#b8aed0',
      500: '#9b8ac8',
      600: '#7b6ba8',
      700: '#6b5b98',
      800: '#4b3b78',
      900: '#3b2b68'
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
      color: '#2d1b4e'
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
      color: '#6b5b98'
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