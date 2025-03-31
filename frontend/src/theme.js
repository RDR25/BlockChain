import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#00683E' },
    secondary: { main: '#C7AE6A' },
    text: {
      primary: '#003520',
      secondary: '#d5c28f'
    }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: {
      fontWeight: 700,
      background: 'linear-gradient(45deg, #b99a45 30%, #d5c28f 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }
      }
    }
  }
});
