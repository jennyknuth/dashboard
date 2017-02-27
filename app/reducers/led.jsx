const fan = (state = {vals: []}, action) => {
  switch (action.type) {
    case 'HEX_COLOR':
      return {
        ...state,
        vals: [...state['vals'], {
          hex: action.hex,
        }],
      };
    default:
      return state;
  }
}

export default fan;
