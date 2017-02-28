// React essentials
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


// For our theme provider
import theme from 'theme';


// Set up our redux store with tied to our mega reducer
import mainApp from 'reducers';
const store = createStore(mainApp);

// App controllers
import FanController from 'controllers/fan';

// Initialize and start all of our controllers.
// This can be optimized to start only when the proper
// route is loaded
[FanController].forEach(ctrl => {
  const c = new ctrl();
  c.initialize(store.dispatch);
  c.start();
});

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
