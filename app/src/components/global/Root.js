import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Helmet from 'react-helmet';
import MainNav from './MainNav';

export default class Root extends React.Component {
  render() {
    const { store, history, children } = this.props;

    const routes = {
      path: '/',
      component: MainNav,
      childRoutes: children
    }

    return (
      <div>
        <Helmet
          titleTemplate="%s | BeeApp - 名古屋のサークル・イベント情報サイト"
          defaultTitle="BeeApp - 名古屋のサークル・イベント情報サイト"
        />
        <Provider store={store}>
          <Router history={history} store={store} routes={routes} />
        </Provider>
      </div>
    )
  }
}
