import React,{Component} from 'react';
import {Link} from 'react-router-dom';

let lang = 'x';
let i=0;
let morePhrases;

const SearchTrans = ({phrases,phraseLang}) =>{
 if (phrases.lang!=phraseLang) {
   if (lang !== phrases.lang){ i=0; lang = phrases.lang;
          return <div className = 'box'>
          {'['+phrases.lang+']'} {phrases.word }
          </div>
  }
  else{ 
            return <div className = 'box'>
            { phrases.word  }
            </div>
       
        
        
    }
  }
  else {
    return <div className = 'box'>
          
          </div>
        }
  }
  
  




export default SearchTrans;