import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import theme from './style/theme';

import WebFont from 'webfontloader';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

WebFont.load({
  google: {
    families: ['Orbitron', 'Nunito']
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);