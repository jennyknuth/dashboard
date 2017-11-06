import { combineReducers } from 'redux';
import dashboard from 'reducers/dashboard';
import product from 'reducers/product';
import industrial from 'reducers/industrial';
import agriculture from 'reducers/agriculture';
import community from 'reducers/community';
import today from 'reducers/today';


const mainApp = combineReducers({
  product,
  dashboard,
  industrial,
  agriculture,
  community,
  today
});

export default mainApp;
