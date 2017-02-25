const socketVal = (state = { lastVal: {} }, action) => {
  switch (action.type) {
    case 'SOCKET_VAL':
      return {
        ...state,
        lastVal: action.data,
      };
    default:
      return state;
  }
}

export default socketVal;
