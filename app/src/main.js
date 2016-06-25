require('babel-polyfill');
require("../styles/main.scss");

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
//import { syncHistoryWithStore } from 'react-router-redux';

import Root from './components/global/Root';
import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore();
const rootElement = document.getElementById('app');

if(rootElement) {
  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    rootElement
  )
}
