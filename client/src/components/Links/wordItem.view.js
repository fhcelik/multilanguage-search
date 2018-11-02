import React from 'react';
import {withMyActionHandlers} from './link.container'

const Link = ({onClick,phrases}) => (

  <div className = 'box'>
    
    <a href="#"  onClick={onClick}>{phrases.word}</a>
    
  </div>
);

export default Link;


  
  

