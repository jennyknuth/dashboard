import reduce from 'lodash/reduce';

const defaultState = {
  time: {},
  timely: {},
  dgs: {},
  zenReply: {},
};

const industrial = (state, action) => {
  const getSum = (data) => (reduce(action.data, (result, value, key) => result + (isNaN(value) ? 0 : value), 0));
  const displayTime = (hour, min) => (`${hour}:${min}`);
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'TIMELY_HOURS':
      return {
        ...state,
        timely: action.data,
      };
    case 'DGS':
      return {
        ...state,
        dgs: action.data,
        dgsTotal: getSum(action.data),
      };
    case 'CLOCK': {
      return {
        ...state,
        time: action.data,
      };
    }
    case 'ZEN_REPLY': {
      return {
        ...state,
        zenReply: displayTime(action.data['average-reply-hours'], action.data['average-reply-minutes']),
      };
    }
    default:
      return state;
  }
};

export default industrial;
