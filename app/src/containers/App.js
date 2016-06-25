import React from 'react';
import Helmet from 'react-helmet';
import MainNav from '../components/global/MainNav';
import { Link } from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 }
  }

  countUp() {
    this.setState({ count: this.state.count+1 })
  }

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s | BeeApp - 名古屋のサークル・イベント情報サイト"
          defaultTitle="BeeApp - 名古屋のサークル・イベント情報サイト"
        />
        <MainNav />
        <button onClick={::this.countUp}>CountUp</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

