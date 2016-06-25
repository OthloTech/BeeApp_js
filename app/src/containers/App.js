import React from 'react';
import b from '../components/lib/b';
import { Link } from'react-router';

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
        <button onClick={::this.countUp}>CountUp</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

