import _ from 'lodash';

const defaultState = {
  lastRead: undefined,
  current: {},
  forecast: [],
};

const weather = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'WEATHER':
      return {
        ...state,
        lastRead: action.data,
        current: _.pick(action.data, ['location', 'icon', 'temp', 'feels_like', 'wind_mph', 'wind_dir']),
        forecast: action.data.forecast,
      };
    default:
      return state;
  }
};

export default weather;
