import {connect} from 'react-redux';
import Search from './Search.view';
import {findWord} from '../../actions/action';
import {withHandlers} from 'recompose';
import {compose} from 'redux';

const searchPhraseSelector = ({ phrase }) => {phrase}


const enhance = compose(
  connect(
    state => ({
      searchPhrase: searchPhraseSelector(state)
    }),
    {findWord}
  ),
  withHandlers({
    // onKeyDown : props => e =>{ 
    //             time_start = new Date();
    //             if(e.target.value.length == 1)
                  
    // },
    onChange : ({findWord}) => e => {
               // if(e.target.value.length > 3)
                  {
                    findWord(e.target.value) 
                  }
    
  } 
  }))(Search);

export default enhance;