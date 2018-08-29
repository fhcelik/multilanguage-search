import {connect} from 'react-redux';
import Search from './Search.view';
import {findWord} from '../../actions/action';
import {withHandlers} from 'recompose';
import {compose} from 'redux';
import HomeReducer from '../../reducers/homeReducer';

const searchPhraseSelector = ({ phrase }) => {phrase}


const enhance = compose(
  connect(
    state => ({
      searchPhraseda: searchPhraseSelector(state),
  
    }),
    {findWord}
  ),
  withHandlers({
    // onKeyDown : props => e =>{ 
    //             time_start = new Date();
    //             if(e.target.value.length == 1)
                  
    // },
    onChange : ({findWord}) => e => {
                if(e.target.value.length > 2)
                  { 
                    findWord(e.target.value) 
                  }
                  else {
                    findWord(1) 
                  }
    
  } 
  }))(Search);

export default enhance;