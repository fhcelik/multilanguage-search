import {connect} from 'react-redux';
import Link from './wordItem.view';
import {clickWord} from '../../actions/action';
import {withHandlers} from 'recompose';
import {compose} from 'redux';

const searchPhraseSelector = ({ phrase }) => {phrase}

const enhance = compose(
  connect(
    state => ({
      phrases: searchPhraseSelector(state)
    }),
    {clickWord}
  ),
  withHandlers({
    onClick : ({clickWord}) => e => {
      // if(e.target.value.length > 3)
         {
          clickWord(e.target.value) 
         }
   
  }}))(Link);

export default enhance;

