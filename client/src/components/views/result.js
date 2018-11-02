import React from "react";
import { Link } from 'react-router-dom';
import {clickWord} from '../../actions/action';
import {withHandlers,lifecycle, mapPropsStream,compose,withLoader} from 'recompose';
import {connect} from 'react-redux';
import SearchDesc from '../searchItem/searchDesc';
import SearchSynonym from '../searchItem/searchSynonym';
import SearchTranslation from '../searchItem/searchTranslation';
import NewComponent from '../searchItem/newComponent';
import Search from '../search';
import WordItem from '../Links/wordItem.view';
import './result.css';


const Result = ({match,data,searchPhrase,onKeyDown,onChange}) =>{ 
    const phraseWord = match.params.word;
    const phraseLang = match.params.lang;
    
    return   (
        <div className="container">
        <div className="Search">
          
          <Search 
          onChange={onChange} 
          onKeyDown={onKeyDown}
          value={searchPhrase}
          /> 
     
        </div>
        <div style={{position:'fixed'}}>
        
        {data.homeData.words.map((phrases,i) =>
        
         <WordItem
            key={i}
            phrases={phrases}
          
         />
         
      
        )} 

     </div>
        <div><h3>{phraseWord} [ {phraseLang } ]</h3></div>
        <hr/>
        <h3>Description :</h3>
        <div id={'resultReducer'}>

        {data.resultData.words.map((phrases,i) =>

           <SearchDesc
              key={i}
              phrases={phrases}
              phraseWord={phraseWord}
              phraseLang={phraseLang}
           />
        
          )}

        </div>
        <hr/>
        
        <h3>Synonym</h3>
        <div className="Synonym">
        {data.resultData.words.map((phrases,index) =>

            < SearchSynonym
              key={index}
              phrases={phrases}
              phraseLang={phraseLang}
              phraseWord={phraseWord}
            />
        
        )}
        </div>
        <hr/>

        <h3>Translations</h3>
        <div className="Translations">
        {data.resultData.words.map((phrases,i) =>

            <SearchTranslation
              key={i}
              phrases={phrases}
              phraseLang={phraseLang}
              data={data}
              
            />

        )}
        </div>
        

 
       
    <div id="result">
       
        <Link to={`/`}>Home</Link>
    </div>
    </div>)}

const isFetchingSelector = ({ phrase }) => {phrase}
const mapStateToProps = (state) => ({
    isFetching: isFetchingSelector(state),
  })
  
  const enhance = compose(
    connect(mapStateToProps, { clickWord }),
    lifecycle({
      componentDidMount() {
        const { clickWord, match: { params } } = this.props
        clickWord(params.word)
      }
    })
  )(Result);

export default enhance;


