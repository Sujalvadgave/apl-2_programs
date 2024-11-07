import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color
    },
    secondary: {
      main: '#ff4081', // Pink color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 20 }}>
        <Typography variant="h1" color="primary">
          Welcome to MUI Theming
        </Typography>
        <Typography variant="h2" color="secondary">
          Customize your UI with ease
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
