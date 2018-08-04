

const initialState = {
  words: [],
  sendingRequest: false,
  error: null
};
const HomeReducer = (state = initialState, action) => {
  let words;
  switch (action.type) {
    case 'FETCH_WORD_PENDING':
      return { ...state, sendingRequest: true };
    case 'FETCH_WORD_FULFILLED':
      words = action.payload;
      return { ...state, sendingRequest: false, words };
    case 'FETCH_WORD_REJECTED':
      return { ...state, sendingRequest: false, error: `${action.payload.message}` };
    default:
      return state;
  }
};

export default HomeReducer;