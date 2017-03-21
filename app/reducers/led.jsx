const defaultState = {
  color: '#ffffff',
  lastRead: undefined,
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

const led = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'HEX_COLOR': {
      const { red, blue, green} = action.data;
      return {
        ...state,
        lastRead: action.data,
        red,
        color: rgbToHex(red, green, blue),
      };
    }
    default:
      return state;
  }
};

export default led;
