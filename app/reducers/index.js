import { combineReducers } from 'redux';
import fan from 'reducers/fan';
import led from 'reducers/led';
import weather from 'reducers/weather';
import flow from 'reducers/flow';


const mainApp = combineReducers({
  fan,
  led,
  weather,
  flow,
});

export default mainApp;
