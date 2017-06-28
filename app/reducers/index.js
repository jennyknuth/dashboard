import { combineReducers } from 'redux';
import dashboard from 'reducers/dashboard';
import product from 'reducers/product';


const mainApp = combineReducers({
  product,
  dashboard,
});

export default mainApp;
