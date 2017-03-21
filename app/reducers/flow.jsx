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
  const hexCode = '#' + componentToHex(red) + componentToHex(green) + componentToHex(blue);
  const color = hexCode === '#000000' ? '#354042' : hexCode;
  return color;
};

const flow = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
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
      };
    }
    case 'FLOW_READ': {
      const { red, blue, green, wind_flow } = action.data;
      return {
        ...state,
        lastRead: action.data,
        color: rgbToHex(red, green, blue),
        flow: wind_flow,
      };
    }
    case 'FAN_READ':
      return {
        ...state,
        fanOn: action.data.fan_state,
        lastRead: action.data,
      };
    default:
      return state;
  }
};

export default flow;
