import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Search from '../search';
import WordItem from './wordItem';
import {compose,withStateHandlers} from 'recompose';
 
    const Home = ({data,fetchWords,searchPhrase}) =>
     (
      <div className="container">
         <Search
          onChange={fetchWords}
          value={searchPhrase}
        /> 
        <div id={'homeReducer'}>
           {data.homeReducer.words.map((word,i) =>
            
            <WordItem
              key={i}
              word={word}
            />
          )} 
  
        </div>
        {/* <button type="submit" onClick = {onClick}>Submit</button> */}
        <Link to={`/results`}>Results</Link>
      </div>
    )
  



export default Home;