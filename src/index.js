import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from './store/configureStore';

require('babel-polyfill');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  rootEl
);