const defaultState = {
  lastRead: undefined,
  time: {},
  ops: {},
};

const dashboard = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'OPERATIONS':
      return {
        ...state,
        ops: action.data,
      };
    case 'CLOCK': {
      return {
        ...state,
        time: action.data,
      };
    }
    default:
      return state;
  }
};

export default dashboard;
