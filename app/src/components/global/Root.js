import React from 'react';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  count() {
  	this.setState({ count: this.state.count + 1 });
  }
  render() {
  	const { id } = this.props;
  	const str = `${id} button Count on ${this.state.count}`;
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.count.bind(this)}>{str}</button>
      </div>
    )
  }
}
