import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'Orbitron',
      'Nunito',
    ].join(','),
  },
    palette: {
      primary: {
        main: '#3D50FF',
        fontFamily: 'Orbitron'
      },
      secondary: {
        main: '#5EC6B8',
      },
      sidebar: {
          main: '#191C30',
      },
      warning: {
        main: '#F34040',
      },
      success: {
        main: '#5EC6B826',
      },
      background: {
        default: '#121111',
        paper: '#292323',
      },
      text: {
        primary: '#ffffff',
        secondary: '#5EC6B8',
      },
      error: {
        main: red.A400,
      },
    },
});

export default theme;