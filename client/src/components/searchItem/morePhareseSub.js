import React,{Component} from 'react';
import {Link} from 'react-router-dom';

let i=0;


const MorePhrase = ({lang,phrases}) =>{ 

 
   
            
               if(lang==phrases.lang){i++;console.log(i)
                return <div className = 'boxes'>
                     {i>2 ?  `${phrases.word},` : null}
               </div>
               }
               else{ i=0;
                    return <div className = 'boxes'>
               
                    </div>
               }
           
    }


export default MorePhrase;