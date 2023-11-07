import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      light: '#FFFFFF', //  white color
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

    action: {
      hover: '#4cb5c3',
      focus: '#4cb5c3',
      disabledOpacity: 0.8,

      // selected: '#a9f3fd',
      // active: '#87d1db', light
      active: '#02afc5',
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

theme = responsiveFontSizes(theme);

export { theme };
