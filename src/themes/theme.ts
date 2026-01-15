import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

// Medical Blue & Vibrant Teal Palette
const palette = {
  primary: {
    main: '#0056D2', // Trustworthy Medical Blue
    light: '#4B91F7',
    dark: '#003A8C',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#00C9A7', // Vibrant Teal/Mint for actions/highlights
    light: '#5EFAD5',
    dark: '#00967C',
    contrastText: '#0d2b27',
  },
  background: {
    default: '#F4F7FA', // Very light blue-grey for modern feel
    paper: '#FFFFFF',
  },
  text: {
    primary: '#1A2027',
    secondary: '#5E6C79',
  },
};

const typography = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 700,
  },
  h2: {
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 700,
  },
  h3: {
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 600,
  },
  h4: {
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 600,
  },
  h5: {
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 500,
  },
  h6: {
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 500,
  },
  button: {
    fontFamily: '"Outfit", sans-serif',
    fontWeight: 600,
    textTransform: 'none' as const, // Modern feel, no all-caps
  },
};

const components: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        padding: '10px 24px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },
      containedPrimary: {
        background: 'linear-gradient(135deg, #0056D2 0%, #0073E6 100%)',
      },
      containedSecondary: {
        background: 'linear-gradient(135deg, #00C9A7 0%, #00E5BE 100%)',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      },
    },
  },
  MuiContainer: {
    defaultProps: {
      maxWidth: 'lg',
    },
  },
};

let theme = createTheme({
  palette,
  typography,
  components,
});

theme = responsiveFontSizes(theme);

export default theme;
