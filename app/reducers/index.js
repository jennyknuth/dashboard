import { combineReducers } from 'redux';
import dashboard from 'reducers/dashboard';


const mainApp = combineReducers({
  dashboard,
});

export default mainApp;
