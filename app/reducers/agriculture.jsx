import reduce from 'lodash/reduce';

const defaultState = {
  time: {},
  agTimely: {},
  dvp: {},
};

const agriculture = (state, action) => {
  const getSum = (data) => (reduce(action.data, (result, value, key) => result + (isNaN(value) ? 0 : value), 0));
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'AG_TIMELY':
      return {
        ...state,
        agTimely: action.data,
      };
    case 'DVP':
      return {
        ...state,
        dvp: action.data,
        dvpTotal: getSum(action.data),
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

export default agriculture;
