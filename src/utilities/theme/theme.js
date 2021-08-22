import { createTheme } from '@material-ui/core/styles';

const colors = {
    darkBlue: '#243356',
    greyDark: '#808080',
    black: '#000000',
    white: '#ffffff',
    greyMedium: '#d7d9db',
    navyBlue: '#2547a0',
    red: '#ed1f24',
};



export const theme = createTheme({
  palette: {
    primary: {
      main: colors.navyBlue,
    },
    secondary: {
      main: colors.darkBlue,
    },
  },
});