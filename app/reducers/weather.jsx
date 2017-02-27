const fan = (state = {vals: []}, action) => {
  switch (action.type) {
    case 'WEATHER':
      return {
        ...state,
        vals: [...state['vals'], {
          weather: action.weather,
        }],
      };
    default:
      return state;
  }
}

export default weather;
