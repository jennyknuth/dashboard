import map from 'lodash/map';
const defaultState = {
  lastRead: undefined,
  time: {},
  timely: {},
  openPositions: {},
  applicants: {},
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
    case 'OPEN_POSITIONS': {
      return {
        ...state,
        openPositions: map(action.data, (d, key) => key),
      };
    }
    case 'APPLICANTS': {
      return {
        ...state,
        applicants: action.data,
      };
    }
    default:
      return state;
  }
};

export default dashboard;
