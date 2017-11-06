const defaultState = {
  birthdays: ['No one today. Maybe tomorrow.'],
  reminders: ['Be free.'],
  updates: []
};

const today = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'BIRTHDAYS':
      return {
        ...state,
        birthdays: action.data.posts,
      };
    case 'REMINDERS':
      return {
        ...state,
        reminders: action.data.posts,
      };
    case 'UPDATES':
      return {
        ...state,
        updates: action.data.posts,
      };
    default:
      return state;
  }
};

export default today;
