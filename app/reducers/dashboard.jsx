import map from 'lodash/map';
import moment from 'moment';

const defaultState = {
  time: {},
  timely_hours_ordinal: [],
  timely_employees_continuous: [],
  jazz_jobs_list: [],
  jazz_applicants_count: 'n/a',
  slack_employees_count: 'n/a',
  kitchen_coffee_count: 'n/a',
  auth0_active_users_count: 'n/a',
  auth0_total_user_count: 'n/a',
};

const dashboard = (state, action) => {
  const labelValueArray = obj => map(obj, (value, key) => ({ label: key, value: value }));
  const labelValueArrayRemoveType = obj => labelValueArray(obj).filter(item => item.label !== ('type' || 'vertical'));
  const timeArray = obj => map(obj, (value, key) => (key !== 'type' ? { time: moment(key, 'YYYY-MM').format('X'), value: value } : undefined));
  const timeArrayRemoveUndefined = obj => timeArray(obj).filter(item => item !== undefined);

  const listKeys = obj => map(obj, (value, key) => key);
  const listKeysRemoveType = obj => listKeys(obj).filter((key) => key !== 'type');
  const formatData = (data) => {
    switch (data.type) {
      case 'timely_hours_ordinal':
        return labelValueArrayRemoveType(data);
      case 'timely_employees_continuous':
        return timeArrayRemoveUndefined(data);
      case 'jazz_jobs_list':
        return listKeysRemoveType(data);
      default:
        return action.data;
    }
  };
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'OPERATIONS':
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

export default dashboard;
