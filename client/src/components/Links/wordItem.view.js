import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../views/result.css'

 const Linked = ({phrases}) =>{ 
  
  return <div className = 'box'>
 
    <Link to={'/entries/'+phrases.word+'/'+phrases.lang}>{phrases.word}</Link> <span>[{phrases.lang}]</span>
   
  </div>

}

export default Linked;
  
  

