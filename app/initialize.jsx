import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-css-themr';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import IntroLab from './components/index';
import theme from './theme';
import mainApp from './reducers';
import fanController from './controllers/fan';

const store = createStore(mainApp);

nio.source.socketio('https://labtest.socket.nio.works', ['fan'])
  .pipe(nio.func((data) => {
    fanController(store.dispatch, data);
  }));

document.addEventListener('DOMContentLoaded', () => {
  const root = (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <IntroLab />
      </Provider>
    </ThemeProvider>
  );
  ReactDOM.render(root, document.getElementById('app'));
});
