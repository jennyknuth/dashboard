const fan = (state = {vals: []}, action) => {
  switch (action.type) {
    case 'FAN_READ':
      if (state.vals.length > 10) {
        state.vals.shift();
      }
      return {
        ...state,
        vals: [...state['vals'], {
          accel: action.accel,
          time: action.time,
        }],
      };
    default:
      return state;
  }
}

export default fan;
