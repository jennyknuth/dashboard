import { toArray } from 'react-emoji-render';
import getUrls from 'get-urls';

const formatAnswers = (answer) => {
  answer.map(a => {
    a.removeRightAngle = a.text.replace('>', '');
    a.removeLeftAngle = a.removeRightAngle.replace('<', '');
    a.imageUrl = Array.from(getUrls(a.removeLeftAngle, {stripWWW: false}))[0];
    a.removeLink = a.removeLeftAngle.replace(a.imageUrl, '');
    a.emojiText = toArray(a.removeLink);
    a.formattedText = a.emojiText;
  });
  return answer;
};

const defaultState = {
  question: {},
  answer: []
};

const community = (state, action) => {
  const formatData = (data) => {
    switch (data.type) {
      case 'question':
        return data.question;
      case 'answer':
        return formatAnswers(data.answer);
    }
  };
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'COMMUNITY':
      return {
        ...state,
        [action.data.type]: formatData(action.data),
      };
    default:
      return state;
  }
};

export default community;
