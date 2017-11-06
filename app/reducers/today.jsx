// import { toArray } from 'react-emoji-render';
// import getUrls from 'get-urls';
// import includes from 'lodash/includes';

// const formatAnswers = (answer) => {
//   answer.map(a => {
//     a.removeRightAngle = a.text.replace('>', '');
//     a.removeLeftAngle = a.removeRightAngle.replace('<', '');
//     const url = Array.from(getUrls(a.removeLeftAngle, {stripWWW: false}))[0];
//     a.imageUrl = includes(url, '.jpg') || includes(url, '.png') ? url : undefined;
//     a.videoUrl = includes(url, 'youtube') || includes(url, 'vimeo') ? url : undefined;
//     a.removeLink = a.removeLeftAngle.replace(url, '');
//     a.emojiText = toArray(a.removeLink);
//     a.formattedText = a.emojiText;
//   });
//   return answer;
// };

const defaultState = {
  birthdays: [],
  reminders: [],
  updates: []
};

const today = (state, action) => {
  const formatData = (data) => {
    switch (data.type) {
      case 'birthdays':
        data.title = 'birthdays';
        return data;
      case 'reminders':
        data.title = 'reminders';
        return data;
      case 'updates':
        data.title = 'updates';
        return data;
    }
  };
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'TODAY':
      return {
        ...state,
        [action.data.type]: formatData(action.data),
      };
    default:
      return state;
  }
};

export default today;
