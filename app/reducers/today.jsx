const defaultState = {
  reminders: [],
  announcements: [],
  birthdays: [],
};

const today = (state, action) => {
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'REMINDERS':
      return {
        ...state,
        reminders: action.data.posts,
      };
    case 'ANNOUNCEMENTS':
      return {
        ...state,
        announcements: action.data.posts && action.data.posts.length > 0 ? action.data.posts : ['Bill is running a bit late today.', 'Run, Bill, run!'],
      };
    case 'BIRTHDAYS':
      return {
        ...state,
        birthdays: action.data.posts,
      };
    default:
      return state;
  }
};

export default today;
