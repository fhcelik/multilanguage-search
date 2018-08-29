
import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import resultReducer from './resultReducer';

export default combineReducers({
    homeData : homeReducer,
    resultData : resultReducer,
    
})

 