import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import MorePhrase from './morePhrase';
import NewComponent from './newComponent';
import {withStateHandlers,lifecycle, mapPropsStream,compose,withLoader} from 'recompose';
import './searchTranslation.css';
import { Button } from '@material-ui/core';




const enhance = compose (
  withStateHandlers(
    () => ({morePhrases : false, remove:true, newComponent:false}), 
    {
      onClick : props => (e) => ({morePhrases : true, lang:e.target.value, remove:false})
  
      
    }
   
)
);
 






const SearchTrans = ({phrases,phraseLang,data,onClick,morePhrases,remove,lang}) =>{ 
          return  remove ? <div className = 'box'>
                             {phrases.firstDataLang.map((phrase,i,arr) => 
                               <span key={i}> {phraseLang!==phrase.lang ? 
                                                     (i === 0 ? '['+phrase.lang+']  ' + phrase.word+',': 
                                                     (i<=1 ? phrase.word:
                                                     (i === arr.length-1 ? <button  value={phrase.lang} onClick={onClick}> {i-1} more...</button> : ''))) : '' } 
                                                              
                                </span>
                              )}
                           </div> :
                              <div  className = 'box'> 
                              {data.resultData.words.map((phrase,index) => 
                                <MorePhrase key={index} phrase={phrase} lang={lang} />
                              )}  
                              </div>

                             
                  
 


  }
  
  




export default enhance(SearchTrans);