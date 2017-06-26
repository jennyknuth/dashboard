const defaultState = {
  vals: [],
  fanOn: false,
  lastRead: undefined,
};

const fan = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'FAN_READ':
      return {
        ...state,
        fanOn: action.data.fan_state,
        lastRead: action.data,
      };
    case 'ACCEL_READ': {
      if (state.vals.length > 10) {
        state.vals.shift();
      }
      const { accel } = action.data;
      return {
        ...state,
        vals: [...state['vals'], {
          value: accel,
          time: Date.now(),
        }],
      };
    }
    case 'CLOCK': {
      return {
        ...state,
        foo: action.data,
      };
    }
    default:
      return state;
  }
};

export default fan;
