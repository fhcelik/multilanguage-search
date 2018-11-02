import {connect} from 'react-redux';
import Search from './Search.view';
import {findWord} from '../../actions/action';
import { compose, withHandlers } from 'recompose';

const searchPhraseSelector = ({ phrase }) => {phrase}

const enhance = compose(
  connect(
    state => ({
      searchPhrase: searchPhraseSelector(state)
    }),
    findWord
  ),
  withHandlers({
    onChange : props => e => {
      
      findWord(e.target.value)
      
  }

    
  })
);

export default enhance(Search);