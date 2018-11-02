import React,{Component} from 'react';
import {Link} from 'react-router-dom';




const SearchSynonym = ({phrases,phraseLang,phraseWord}) =>{ 


  return <div className = 'box'>
          {phrases.firstDataLang.map((phrase,i,arr) => 
          <span key={i}>   {phrase.lang===phraseLang && phraseWord!==phrase.word ? ( i===arr.length-1 ? phrase.word : phrase.word+ ','  ) : '' }</span>
          )}
            
        </div>
}
export default SearchSynonym;