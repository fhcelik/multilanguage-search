

const initialState = {
  words: [],
  sendingRequest: false,
  error: null
};
const resultReducer = (state = initialState, action) => {
  let words;
  switch (action.type) {
    case 'FETCH_PHRASE_PENDING':
      return { ...state, sendingRequest: true };
    case 'FETCH_PHRASE_FULFILLED':
      words = action.payload;
      return { ...state, sendingRequest: false, words };
    case 'FETCH_PHRASE_REJECTED':
      return { ...state, sendingRequest: false, error: `${action.payload.message}` };
    default:
      return state;
  }
};

export default resultReducer;