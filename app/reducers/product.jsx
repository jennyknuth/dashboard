import reduce from 'lodash/reduce';

const defaultState = {
  time: {},
  productTimely: {},
  pubkeeper: {},
  designer: {},
  api: {},
};

const product = (state, action) => {
  const getSum = (data) => (reduce(action.data, (result, value, key) => result + (isNaN(value) ? 0 : value), 0));
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'PRODUCT_TIMELY':
      return {
        ...state,
        productTimely: action.data,
      };
    case 'PUBKEEPER':
      return {
        ...state,
        pubkeeper: action.data,
        pubkeeperTotal: getSum(action.data),
      };
    case 'DESIGNER':
      return {
        ...state,
        designer: action.data,
        designerTotal: getSum(action.data),
      };
    case 'API':
      return {
        ...state,
        api: action.data,
        apiTotal: getSum(action.data),
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
