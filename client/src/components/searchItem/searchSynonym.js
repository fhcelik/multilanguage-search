import React,{Component} from 'react';
import {Link} from 'react-router-dom';




const SearchSynonym = ({phrases,phraseLang}) =>{ 


  return <div className = 'box'>
            <span>{phrases.lang==phraseLang ? phrases.word+',' : '' }</span>
        </div>
}
export default SearchSynonym;