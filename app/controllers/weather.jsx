import { weather } from '../actions/weather';

const handleWeather = (dispatch, data) => {
  dispatch(setWeather(data));
}

export default handleWeather;
