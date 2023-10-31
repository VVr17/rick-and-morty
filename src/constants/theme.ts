import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      light: 'FFFFFF', //  white color
      main: '#272B33', //  gray color
      dark: '#202329', //  dark-gray color
    },

    secondary: {
      main: '#F5F5F5', // light text
    },

    background: {
      default: '#3C3E44', // main bg color
    },

    text: {
      primary: '#F5F5F5', // primary white text
      secondary: '#9E9E9E', // secondary gray text
    },

    error: {
      main: '#D63D2E',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
});
