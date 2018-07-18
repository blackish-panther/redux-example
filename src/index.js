import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { START_LOAD_IP, SUCCEED_LOAD_IP } from './store/actions';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch({ type: START_LOAD_IP });
fetch('http://ip.jsontest.com')
  .then(req => req.json())
  .then(({ ip }) => {
    store.dispatch({
      type: SUCCEED_LOAD_IP,
      payload: ip,
    });
  });
