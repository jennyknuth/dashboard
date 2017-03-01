const defaultState = {
  lastRead: undefined,
};

const weather = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'WEATHER':
      return {
        ...state,
        lastRead: action.data,
      };
    default:
      return state;
  }
}

export default weather;
