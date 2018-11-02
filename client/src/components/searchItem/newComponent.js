import React,{Component} from 'react';
import {Link} from 'react-router-dom';




const SearchSynonym = ({data,value}) =>{ 

 
  
  return <div className = 'boxes'> 
            {data.resultData.words.map((phrases,i) => 
               value==phrases.word ?  `${phrases.word},` : null
            )} 
        </div>
    }


export default SearchSynonym;