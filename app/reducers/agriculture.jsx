import reduce from 'lodash/reduce';
import map from 'lodash/map';
import moment from 'moment';

const defaultState = {
  time: {},
  'timely_hours_ordinal': [],
  'jira_dpv_progress': {},
};

const agriculture = (state, action) => {
  const labelValueArray = obj => map(obj, (value, key) => ({ label: key, value: value }));
  const labelValueArrayRemoveType = obj => labelValueArray(obj).filter(item => item.label !== 'type');
  const getSum = (data) => (reduce(action.data, (result, value, key) => result + (isNaN(value) ? 0 : value), 0));
  const formatData = (data) => {
    switch (data.type) {
      case 'timely_hours_ordinal':
        return labelValueArrayRemoveType(data);
      case 'jira_dvp_progress':
        return {
          dvp: action.data,
          dvpTotal: getSum(action.data)
        };
      default:
        return action.data;
    }
  };

  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'AGRICULTURE':
      return {
        ...state,
        [action.data.type]: formatData(action.data),
      };
    case 'CLOCK': {
      return {
        ...state,
        quarter: action.data.quarter,
        time: {
          day: moment(action.data.cur_time).local().format('D'),
          year: moment(action.data.cur_time).local().format('YYYY'),
          month: moment(action.data.cur_time).local().format('MMMM'),
          weekday: moment(action.data.cur_time).local().format('dddd'),
          currentTime: moment(action.data.cur_time).format('LT'),
        },
      };
    }
    default:
      return state;
  }
};

export default agriculture;
