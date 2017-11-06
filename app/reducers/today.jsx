const defaultState = {
  reminders: ['Be free.'],
  announcements: [],
  birthdays: ['No one today. Maybe tomorrow.'],
};

const today = (state, action) => {
  if (state === undefined || state.birthdays === null || state.reminders === null) {
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
    case 'ANNOUNCEMENTS':
      return {
        ...state,
        announcements: action.data.posts,
      };
    default:
      return state;
  }
};

export default today;
