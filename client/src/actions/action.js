import axios from 'axios';


// export const sendWord = () => {
//   return {
//      type : 'SEND_WORD',
//      payload : axios.get('/api/words/')
//    }
//  }
 


export const findWord = (value) => {
  return (
  {
     type : 'FETCH_WORD',
     payload : axios.get('/api/words/',{params : {word : value}}).then(function (response) {
                          console.log(response);
                        }).catch(function (error) {
                          console.log(error);
                        }).then(function () {
                          console.log('it is executed');
                        })
  })
 }

  const fetchWord = () => {
  return {
     type : 'FETCH_WORD',
     payload : axios.get('/api/words/')
   }
 }

 export default fetchWord;