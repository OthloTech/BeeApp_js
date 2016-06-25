import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Root from './components/global/Root';
//import ClubsIndex from './components/clubs/Index';
import App from './containers/App'
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
)
