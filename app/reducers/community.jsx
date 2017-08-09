const defaultState = {
  question: {},
  answer: []
};

const community = (state, action) => {
  console.log(action);
  const formatData = (data) => {
    console.log('in formatData', data);
    switch (data.type) {
      case 'question':
        return data.question;
      case 'answer':
        return data.answer;
    }
  };
  if (state === undefined) {
    state = defaultState;
  }
  switch (action.type) {
    case 'COMMUNITY':
    console.log('in reducer', action);
      return {
        ...state,
        [action.data.type]: formatData(action.data),
      };
    default:
      return state;
  }
};

export default community;
