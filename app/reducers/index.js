import { combineReducers } from 'redux';
import fan from 'reducers/fan';
import led from 'reducers/led';


const mainApp = combineReducers({
  fan,
  led,
});

export default mainApp;
