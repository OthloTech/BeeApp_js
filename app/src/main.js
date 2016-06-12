import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './components/global/Root';
// import configureStore from 'store/configureStore';
// imort routes from 'routes';

const mountNode = document.getElementById('js-root');
if(mountNode) {
  // const store = configureStore();
  // history = syncHistoryWithStore(browserHistory, store);

  render(
  	<div>
  	  <p>Hello World</p>
  	  <Root id='1' />
  	</div>,
  	mountNode
  )
}