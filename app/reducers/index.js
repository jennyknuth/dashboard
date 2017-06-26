import { combineReducers } from 'redux';
import dashboard from 'reducers/dashboard';
import fan from 'reducers/fan';
import led from 'reducers/led';
import weather from 'reducers/weather';
import flow from 'reducers/flow';


const mainApp = combineReducers({
  fan,
  led,
  weather,
  flow,
  dashboard,
});

export default mainApp;
