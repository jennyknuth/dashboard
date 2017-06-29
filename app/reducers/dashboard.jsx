const defaultState = {
  lastRead: undefined,
  time: {},
  timely: {},
};

const dashboard = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'TIMELY_HOURS':
      return {
        ...state,
        timely: action.data,
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
