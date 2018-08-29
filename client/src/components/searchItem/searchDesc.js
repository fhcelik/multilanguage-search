import React,{Component} from 'react';
import {Link} from 'react-router-dom';


 

const SearchDesc = ({phrases,phraseWord,phraseLang}) =>{ 
  
  return <div className = 'box'>
         {phrases.firstDataLang.map((phrase,i) => 
            <span key={i}> {phraseWord===phrase.word && phraseLang===phrase.lang   ? phrase.desc : '' } </span>
          )}
        </div>
     
}

export default SearchDesc;