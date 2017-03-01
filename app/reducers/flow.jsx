const defaultState = {
  color: "#000000",
  flow: 0,
  lastRead: undefined,
};

const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
const rgbToHex = (red, green, blue) => {
  return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
}

const flow = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'FLOW_READ':
      const { red, blue, green, wind_flow } = action.data;
      return {
        ...state,
        lastRead: action.data,
        color: rgbToHex(red, green, blue),
        flow: wind_flow,
      };
    default:
      return state;
  }
}

export default flow;
