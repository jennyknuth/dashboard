import { combineReducers } from 'redux';
import fan from './fan';
import socket from './socket';


const mainApp = combineReducers({
  fan,
  socket,
});

export default mainApp;
