import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Adjust primary color as needed
    },
    secondary: {
      main: '#ffc107', // Adjust secondary color as needed
    },
  },
});

const MyThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;