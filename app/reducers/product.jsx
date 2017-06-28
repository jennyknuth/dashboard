import reduce from 'lodash/reduce';

const defaultState = {
  time: {},
  timely: {},
  pubkeeper: {},
  designer: {},
  api: {},
};

const product = (state, action) => {
  const total = reduce(action.data, (result, value, key) => result + (isNaN(value) ? 0 : value), 0);
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'TIMELY_HOURS':
      return {
        ...state,
        timely: action.data,
      };
    case 'PUBKEEPER':
      return {
        ...state,
        pubkeeper: action.data,
        pubkeeperTotal: total,
      };
    case 'DESIGNER':
      return {
        ...state,
        designer: action.data,
        designerTotal: total,
      };
    case 'API':
      return {
        ...state,
        api: action.data,
        apiTotal: total,
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

export default product;
