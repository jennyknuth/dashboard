import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-css-themr';
import IntroLab from './components/index';
import theme from './theme';

document.addEventListener('DOMContentLoaded', () => {
  const root = (
    <ThemeProvider theme={theme}>
      <IntroLab />
    </ThemeProvider>
  );
  ReactDOM.render(root, document.getElementById('app'));
});
