import axios from 'axios';

export const findWord = (value) => {
  return (dispatch) => {
    axios.get('/api/words/', { params: { word: value } }).then(function (response) {
   
      dispatch( {
        type: 'FETCH_WORD_FULFILLED',
        payload: response.data
      })
    }).catch(function (error) {
      console.log(error);
    }).then(function () {
      console.log('action is executed');
    })
  }
}

export const clickWord = (value) => {
  return (dispatch) => {
    axios.get('/api/words/', { params: { id: value } }).then(function (response) {
   
      dispatch( {
        type: 'FETCH_PHRASE_FULFILLED',
        payload: response.data
      })
    }).catch(function (error) {
      console.log(error);
    }).then(function () {
      console.log('action is executed');
    })
  }
}

export default findWord; 