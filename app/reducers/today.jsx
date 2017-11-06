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
        reminders: action.data.posts && action.data.posts.length > 0 ? action.data.posts : ['Be free.'],
      };
    case 'ANNOUNCEMENTS':
      return {
        ...state,
        announcements: action.data.posts && action.data.posts.length > 0 ? action.data.posts : ['Engage with niolabs on social media today.'],
      };
    case 'BIRTHDAYS':
      return {
        ...state,
        birthdays: action.data.posts && action.data.posts.length > 0 ? action.data.posts : ['No one today. Maybe tomorrow.'],
      };
    default:
      return state;
  }
};

export default today;
