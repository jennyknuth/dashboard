const defaultState = {
  vals: [],
  fanOn: false,
  lastRead: undefined
};

const fan = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'FAN_READ':
      if (state.vals.length > 10) {
        state.vals.shift();
      }
      const { accel, fan_state } = action.data;
      return {
        ...state,
        vals: [...state['vals'], {
          value: accel,
          time: Date.now(),
        }],
        fanOn: fan_state,
        lastRead: action.data,
      };
    default:
      return defaultState;
  }
}

export default fan;
