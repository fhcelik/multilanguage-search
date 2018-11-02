import React, { Component } from "react";
import Search from '../search';
import WordItem from '../Links/wordItem.view';
import {withHandlers,lifecycle, mapPropsStream,compose,withLoader} from 'recompose';
import {findWord} from '../../actions/action';
import {connect} from 'react-redux';
      

    const Result = ({location,data,searchPhrase,onKeyDown,onChange}) =>{
    
   return  (
      <div className="container">
    
        <div>
          
              <Search 
              onChange={onChange} 
              onKeyDown={onKeyDown}
              value={searchPhrase}
              /> 
         
        </div>
        <div id={'homeReducer'}>
        
           {data.homeData.words.map((phrases,i) =>
           
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
  

  }

  const isFetchingSelector = ({ phrase }) => {phrase}
const mapStateToProps = (state) => ({
    isFetching: isFetchingSelector(state),
  })
  
  const enhance = compose(
    connect(mapStateToProps, { findWord }),
    lifecycle({
      componentDidMount() {
        
        const { findWord, location} = this.props
        const params = new URLSearchParams(location.search)
        const values = params.get('word')
       
        findWord(values)
      }
    })
  )(Result);

export default enhance;

