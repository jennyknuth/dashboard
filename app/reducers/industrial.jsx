import reduce from 'lodash/reduce';
import map from 'lodash/map';
import moment from 'moment';

const defaultState = {
  time: {},
  zendesk_tickets_count: {},
  timely_hours_ordinal: [],
  zendesk_response_time: '',
  jira_dgs_progress: {},
  jira_dgs_priority_progress: {},
  jira_dgs_critical_count: {},
};

const industrial = (state, action) => {
  const labelValueArray = obj => map(obj, (value, key) => ({ label: key, value: value }));
  const labelValueArrayRemoveType = obj => labelValueArray(obj).filter(item => item.label !== ('type' || 'vertical'));
  const getSum = (data) => (reduce(action.data, (result, value, key) => result + (isNaN(value) ? 0 : value), 0));
  const displayTime = (hour, min) => (`${hour}h ${min}m`);
  const formatData = (data) => {
    switch (data.type) {
      case 'timely_hours_ordinal':
        return labelValueArrayRemoveType(data);
      case 'zendesk_response_time':
        return displayTime(data.average_response_hours, data.average_response_minutes);
      case 'jira_dgs_progress':
        return {
          dgs: action.data,
          dgsTotal: getSum(action.data)
        };
      case 'jira_dgs_priority_progress':
        return {
          dgs: action.data,
          dgsTotal: getSum(action.data)
        };
      default:
        return action.data;
    }
  };
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'INDUSTRIAL':
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

export default industrial;
