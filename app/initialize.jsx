import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { ThemeProvider } from 'react-css-themr';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Our app pages
import MainApp from 'components/app';
import Instructions from 'components/instructions';
import Weather from 'components/weather';
import Fan from 'components/fan';
import SensorTag from 'components/sensortag';
import Flow from 'components/flow';

import theme from './theme';
import mainApp from 'reducers';
import nio from 'niojs';
import fanController from './controllers/fan';

const store = createStore(mainApp);

//todo: create rooms with kylie, and combo example
nio.source.socketio('https://labtest.socket.nio.works', ['fan'])
  .pipe(nio.func((data) => {
    fanController(store.dispatch, data);
  }));

document.addEventListener('DOMContentLoaded', () => {
  const root = (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={MainApp}>
            <IndexRoute component={Instructions} title="Welcome" />
            <Route path="step1" component={Weather} title="Weather Lab" />
            <Route path="step2" component={Fan} title="Fan Lab" />
            <Route path="step3" component={SensorTag} title="SensorTag Lab" />
            <Route path="step4" component={Flow} title="Wind Flow Lab" />
          </Route>
        </Router>
      </Provider>
    </ThemeProvider>
  );
  ReactDOM.render(root, document.getElementById('app'));
});
