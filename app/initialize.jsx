// React essentials
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, useRouterHistory } from 'react-router';
import { ThemeProvider } from 'react-css-themr';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import config from 'config';

// Our app pages
import MainApp from 'components/app';
import Dashboard from 'components/dashboard';
import ProductDashboard from 'components/productDashboard';
import IndustrialDashboard from 'components/industrialDashboard';
import AgricultureDashboard from 'components/agricultureDashboard';
import Login from 'components/login';

// For our theme provider
import theme from 'theme';

// Set up our redux store with tied to our mega reducer
import mainApp from 'reducers';
const store = createStore(mainApp);

// App controllers
import DashboardController from 'controllers/dashboard';
import ProductController from 'controllers/product';
import IndustrialController from 'controllers/industrial';
import AgricultureController from 'controllers/agriculture';

// Initialize and start all of our controllers.
// This can be optimized to start only when the proper
// route is loaded
[DashboardController, ProductController, IndustrialController, AgricultureController].forEach(ctrl => {
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

// Authentication Service
import { AuthService } from './services/AuthService';
const AUTH = new AuthService(config.AUTH0_ACCT, config.AUTH0_URL);

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!AUTH.loggedIn()) replace({ pathname: '/login' });
  window.scrollTo(0, 0);
};

// redirect if logged in and on the login page
const checkAuth = (nextState, replace) => {
  if (AUTH.loggedIn()) replace({ pathname: '/' });
  window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', () => {
  const root = (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={MainApp} auth={AUTH}>
            <IndexRedirect to="dashboard" />
            <Route path="operations" component={Dashboard} title="Dashboard" onEnter={scrollTop} />
            <Route path="dashboard" component={Dashboard} title="Dashboard" onEnter={scrollTop} />
            <Route path="product" component={ProductDashboard} title="Product Dashboard" onEnter={scrollTop} />
            <Route path="industrial" component={IndustrialDashboard} title="Industrial Dashboard" onEnter={scrollTop} />
            <Route path="agriculture" component={AgricultureDashboard} title="Agriculture Dashboard" onEnter={scrollTop} />
          </Route>
        </Router>
      </Provider>
    </ThemeProvider>
  );
  ReactDOM.render(root, document.getElementById('app'));
});
