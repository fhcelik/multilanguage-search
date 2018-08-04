import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import Promise from 'redux-promise-middleware';
import Reducer from './reducers';
import thunk from 'redux-thunk';
export default createStore(
  Reducer, 
  applyMiddleware(
    logger,
    Promise(),
    thunk
  )
);