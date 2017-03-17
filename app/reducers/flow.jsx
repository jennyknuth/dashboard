const defaultState = {
  color: '#354042',
  flow: 0,
  lastRead: undefined,
  vals: [],
  fanOn: false,
};

const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

const rgbToHex = (red, green, blue) => {
  return '#' + componentToHex(red) + componentToHex(green) + componentToHex(blue);
};

const flow = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  // if (state.vals.length > 10) {
  //   state.vals.shift();
  // }
  switch (action.type) {
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
        // lastRead: action.data,
      };
    }
    case 'FLOW_READ': {
      const { red, blue, green, wind_flow } = action.data;
      return {
        ...state,
        lastRead: action.data,
        color: rgbToHex(red, green, blue),
        // vals: [...state['vals'], {
        //   time: Date.now(),
        //   value: accel,
        // }],
        flow: wind_flow,
        fanOn: action.data.fan_state,
      };
    }
    default:
      return state;
  }
};

export default flow;
