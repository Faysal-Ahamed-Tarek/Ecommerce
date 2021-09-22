import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#6D28D9',
    },
    secondary: {
      main: '#303030',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F6F8FB',
    },
    White:{
      main:"white"
    }
  },
  typography: {
    fontFamily: [
      'Maven Pro',
    ].join(','),
  },
});

export default theme;