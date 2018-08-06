import {connect} from 'react-redux';
import result from '../components/views/result';
import {clickWord} from '../actions/action';

const mapStateToProps = (state) =>({
  data:state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    clickWord : () => {
      dispatch(clickWord())
    }
  }
}
const resultContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(result);


export default resultContainer;