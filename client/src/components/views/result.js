import React from "react";
import { Link } from 'react-router-dom';
import {clickWord} from '../../actions/action';
import {withHandlers,lifecycle, mapPropsStream,compose,withLoader} from 'recompose';
import {connect} from 'react-redux';
import SearchItem from '../searchItem/searchItem.view'

const Result = ({match,data}) =>{ 
    return   (
        <div className="container">
        <div>{match.params.word}</div>
        
        <div id={'resultReducer'}>
        
        {data.resultReducer.words.map((phrases,i) =>
        
         <SearchItem
            key={i}
            phrases={phrases}
          
         />
         
      
        )} 

     </div>
    <div id="result">
       
        <Link to={`/`}>Home</Link>
    </div>
    </div>)}



export default Result;
