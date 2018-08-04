import React,{Component} from 'react';
import {Link} from 'react-router-dom';


 

 const SearchItem = ({phrases}) =>{ 
  
  return <div className = 'box'>
    <Link to={{pathname:'/results/'+phrases.word+'/'+phrases.id}}>{phrases.word}</Link> <span>[{phrases.lang}]</span>
   
  </div>

}

export default SearchItem;