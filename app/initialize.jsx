import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-css-themr';
import Showcase from './components/showcase';
import theme from './theme';

document.addEventListener('DOMContentLoaded', () => {
  const root = (
    <ThemeProvider theme={theme}>
      <Showcase />
    </ThemeProvider>
  );
  ReactDOM.render(root, document.getElementById('app'));
});
