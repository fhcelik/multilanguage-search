import React, { Component } from "react";
import homeReducer from '../../reducers'
import Search from '../search';
import WordItem from '../Links/wordItem.view';




    const Home = ({data}) =>
     (
      <div className="container">
     
        <div>
          
         <Search /> 
      </div>
        <div id={'homeReducer'}>
       
           {data.homeReducer.words.map((phrases,i) =>
           
            <WordItem
               key={i}
               phrases={phrases}
             
            />
            
         
           )} 
  
        </div>
        <div>
       
      </div>
           
      </div>
    )
  



export default Home;