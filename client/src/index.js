import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import WordStore from './store';
import {Provider} from 'react-redux';

//const store = createStore(reducers);
//<Provider store={store}>
ReactDOM.render(
  
  (<BrowserRouter>
    <Provider store={WordStore}>
      <App/>
    </Provider>
  </BrowserRouter>), 
  document.getElementById('root')
  );
registerServiceWorker();
