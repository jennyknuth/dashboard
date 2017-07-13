import map from 'lodash/map';

const defaultState = {
  time: {},
  timely_hours_ordinal: [],
  jazz_jobs_list: [],
  jazz_applicants_count: 'n/a',
  slack_employees_count: 'n/a',
};

const dashboard = (state, action) => {
  const labelValueArray = obj => map(obj, (value, key) => ({ label: key, value: value }));
  const labelValueArrayRemoveType = obj => labelValueArray(obj).filter(item => item.label !== 'type');
  const listKeys = obj => map(obj, (value, key) => key);
  const listKeysRemoveType = obj => listKeys(obj).filter((key) => key !== 'type');
  const formatData = (data) => {
    switch (data.type) {
      case 'timely_hours_ordinal':
        return labelValueArrayRemoveType(data);
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
        time: action.data,
      };
    }
    default:
      return state;
  }
};

export default dashboard;
