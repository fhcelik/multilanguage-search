import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import MorePhraseSub from './morePhareseSub'



const MorePhrase = ({data,lang,phrase}) =>{ 
let i=0;

  return <div className = 'boxes'>
            {phrase.firstDataLang.map((phrases,i,arr) => 
             <span key={i}> {lang===phrases.lang ? 
              (i === 0 ? '['+phrases.lang+']  ' + phrases.word+',' : (i===arr.length-1 ? phrases.word : phrases.word+',')): '' } 
                       
</span> 
            )}
            </div>
    }


export default MorePhrase;