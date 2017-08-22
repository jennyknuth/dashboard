import { toArray } from 'react-emoji-render';

const formatAnswers = (answer) => {
  answer.map(a => a.formattedText = toArray(a.text));
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
