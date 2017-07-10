import reduce from 'lodash/reduce';
import map from 'lodash/map';

const defaultState = {
  time: {},
  industrialTimely: {},
  dgs: {},
  zenReply: {},
};

const industrial = (state, action) => {
  const labelValueArray = obj => map(obj, (value, key) => ({ label: key, value: value }));
  const labelValueArrayRemoveType = obj => labelValueArray(obj).filter(item => item.label !== 'type');
  const getSum = (data) => (reduce(action.data, (result, value, key) => result + (isNaN(value) ? 0 : value), 0));
  const displayTime = (hour, min) => (`${hour}h ${min}m`);
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'INDUSTRIAL_TIMELY':
      return {
        ...state,
        industrialTimely: labelValueArrayRemoveType(action.data),
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
