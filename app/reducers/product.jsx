import reduce from 'lodash/reduce';
import map from 'lodash/map';

const defaultState = {
  time: {},
  timely_hours_ordinal: [],
  jira_api_progress: {},
  jira_pubkeeper_progress: {},
  jira_dgs_progress: {},
};

const product = (state, action) => {
  const labelValueArray = obj => map(obj, (value, key) => ({ label: key, value: value }));
  const labelValueArrayRemoveType = obj => labelValueArray(obj).filter(item => item.label !== 'type');
  const getSum = (data) => (reduce(action.data, (result, value, key) => result + (isNaN(value) ? 0 : value), 0));
  const formatData = (data) => {
    switch (data.type) {
      case 'timely_hours_ordinal':
        return labelValueArrayRemoveType(data);
      case 'jira_api_progress':
        return {
          api: action.data,
          apiTotal: getSum(action.data)
        };
      case 'jira_designer_progress':
        return {
          designer: action.data,
          designerTotal: getSum(action.data)
        };
      case 'jira_pubkeeper_progress':
        return {
          pubkeeper: action.data,
          pubkeeperTotal: getSum(action.data)
        };
      default:
        return action.data;
    }
  };
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'PRODUCT':
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

export default product;
