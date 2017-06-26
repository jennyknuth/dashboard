// React essentials
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { ThemeProvider } from 'react-css-themr';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import config from 'config';

// Our app pages
import MainApp from 'components/app';
import Intro from 'components/intro';
import Weather from 'components/weather';
import FanLab from 'components/fan';
import Dashboard from 'components/dashboard';
import SensorTag from 'components/sensortag';
import Flow from 'components/flow';

// For our theme provider
import theme from 'theme';

// Set up our redux store with tied to our mega reducer
import mainApp from 'reducers';
const store = createStore(mainApp);

// App controllers
import FanController from 'controllers/fan';
import DashboardController from 'controllers/dashboard';
import LEDController from 'controllers/led';
import WeatherController from 'controllers/weather';
import FlowController from 'controllers/flow';

// React-Markdown [brunch] module for importing *.md files
import 'react-markdown';

// Initialize and start all of our controllers.
// This can be optimized to start only when the proper
// route is loaded
[FanController, LEDController, WeatherController, FlowController, DashboardController].forEach(ctrl => {
  const c = new ctrl();
  c.initialize(store.dispatch);
  c.start();
});

// Router and path setup
// We use our configured APP_ROOT to allow us to
// host this app in a subfolder and not the root
// of the domain
import { createHistory } from 'history';
const history = useRouterHistory(createHistory)({
  basename: config.APP_ROOT
});

const scrollTop = () => window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  const root = (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={MainApp}>
            <IndexRoute component={Intro} title="Welcome" onEnter={scrollTop} />
            <Route path="dashboard" component={Dashboard} title="Dashboard" onEnter={scrollTop} />
            <Route path="weather" component={Weather} title="Weather Lab" onEnter={scrollTop} />
            <Route path="fan" component={FanLab} title="Fan Lab" onEnter={scrollTop} />
            <Route path="sensorTag" component={SensorTag} title="SensorTag Lab" onEnter={scrollTop} />
            <Route path="flow" component={Flow} title="Wind Flow Lab" onEnter={scrollTop} />
          </Route>
        </Router>
      </Provider>
    </ThemeProvider>
  );
  ReactDOM.render(root, document.getElementById('app'));
});
