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
    axios.get('/api/pharses/', { params: { word: value } }).then(function (response) {
      
      dispatch( {
        type: 'FETCH_PHRASE_FULFILLED',
        payload: createLanguageOrder(response.data)
      })
    }).catch(function (error) {
      console.log(error);
    }).then(function () {
      console.log('action is executed');
    })
  }
}

const createLanguageOrder = (data) => {
    let phraseStructure=[]
    let phrases=[]
    let firstDataLang=data[0].lang;
    data.forEach((val,i,arr) => { 
      if(val.lang===firstDataLang){
       if(arr.length - 1 === i){
          phrases.push({ 
                      "lang" : val.lang,
                      "word" : val.word,
                      "desc" : val.desc
          })
          phraseStructure.push({firstDataLang : phrases});
       }
       else { phrases.push({ 
                       "lang" : val.lang,
                       "word" : val.word,
                       "desc" : val.desc
                    })
                  }
                  }
        
      else { if(arr.length - 1 === i){
                   phraseStructure.push({firstDataLang : phrases}); 
                   firstDataLang = val.lang;
                   phrases = [];
                   phrases.push({ 
                                  "lang" : val.lang,
                                  "word" : val.word,
                                  "desc" : val.desc
                                })
                  phraseStructure.push({firstDataLang : phrases});
            }
            else {    
                  phraseStructure.push({firstDataLang : phrases}); 
                  phrases = [];
                  phrases.push({ 
                                  "lang" : val.lang,
                                  "word" : val.word,
                                  "desc" : val.desc
                              })
                  firstDataLang = val.lang;
                  } 
          }
      
    })
 return phraseStructure;
}


export default findWord; 