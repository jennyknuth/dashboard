import * as d3 from 'd3';

const defaultState = {
  reminders: [],
  announcements: [],
  birthdays: [],
  coffee: [],
};

const randomAnnouncements = [
  ['Bill is running a bit late today.', 'Run, Bill, run!'],
  ['Today will be followed by tomorrow.'],
  ['There is coffee in the kitchen.'],
  ['Somewhere near you, there is a nio system is running.'],
  ['You arrived early this morning!'],
  ['Hello from your friendly nio service.'],
  ['You are not alone.'],
  ['Thanks for turning me on.', 'Get Bill'],
  ['Keanu Leaves is alive and well!'],
  ['I am looking for Bill.', 'If you have seen him, could you let him know?'],
  ['I\'m afraid I can\'t do that, Dave']
];

const announcement = d3.shuffle(randomAnnouncements)[0];

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
        announcements: action.data.posts && action.data.posts.length > 0 ? action.data.posts : announcement,
      };
    case 'BIRTHDAYS':
      return {
        ...state,
        birthdays: action.data.posts,
      };
    case 'COFFEE':
      return {
        ...state,
        coffee: action.data.posts,
      };
    case 'RESET':
      return defaultState;
    default:
      return state;
  }
};

export default today;
