import React,{Component} from 'react';
import {Link} from 'react-router-dom';


 

const SearchDesc = ({phrases,phraseWord}) =>{ 
  
  return <div className = 'box'>
     <span>{phraseWord===phrases.word ? phrases.desc : '' }</span>
  </div>

}

export default SearchDesc;