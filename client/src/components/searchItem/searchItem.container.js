import {connect} from 'react-redux';
import Search, {match} from './searchItem.view';
import {clickWord} from '../../actions/action';
import {lifecycle} from 'recompose';
import {compose} from 'redux';


const isFetchingSelector = ({ phrase }) => {phrase}
const mapStateToProps = (state) => ({
    isFetching: isFetchingSelector(state),
  })
  
  const enhance = compose(console.log(match.params.id),
    connect(mapStateToProps, { clickWord }),
    lifecycle({
      componentDidMount() {
        const { clickWord, match: { params } } = this.props
        clickWord(params.id)
      }
    })
  )(Search);

export default enhance;