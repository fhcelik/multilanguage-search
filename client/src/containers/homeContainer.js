import {connect} from 'react-redux';
import home from '../components/views/home';
import fetchWords from '../actions/action';

const mapStateToProps = (state) =>({
  data:state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWords : () => {
      dispatch(fetchWords())
    }
  }
}
const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);


export default homeContainer;