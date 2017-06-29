import map from 'lodash/map';

const defaultState = {
  lastRead: undefined,
  time: {},
  opsTimely: {},
  openPositions: [],
  applicants: 'n/a',
  employeeCount: 'n/a',
};

const dashboard = (state, action) => {
  console.log(action);
  const listKeys = obj => map(obj, (value, key) => key);
  const listKeysRemoveType = obj => listKeys(obj).filter((key) => key !== 'type');
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'OPS_TIMELY':
      return {
        ...state,
        opsTimely: action.data,
      };
    case 'CLOCK': {
      return {
        ...state,
        time: action.data,
      };
    }
    case 'OPEN_POSITIONS': {
      return {
        ...state,
        openPositions: listKeysRemoveType(action.data),
      };
    }
    case 'APPLICANTS': {
      return {
        ...state,
        applicants: action.data,
      };
    }
    case 'EMPLOYEE_COUNT': {
      return {
        ...state,
        employeeCount: action.data.Employees,
      };
    }
    default:
      return state;
  }
};

export default dashboard;
