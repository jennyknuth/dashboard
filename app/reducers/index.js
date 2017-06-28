import { combineReducers } from 'redux';
import dashboard from 'reducers/dashboard';
import product from 'reducers/product';
import industrial from 'reducers/industrial';
import agriculture from 'reducers/agriculture';


const mainApp = combineReducers({
  product,
  dashboard,
  industrial,
  agriculture,
});

export default mainApp;
