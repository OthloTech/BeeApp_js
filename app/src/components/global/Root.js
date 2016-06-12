import React from 'react';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { button: false };
  }
  toggle() {
  	if(this.state && this.state.button) {
  	  this.setState({ button: !this.state.button })
  	} else {
  	  this.setState({ button: true })
  	}
  }
  render() {
  	const { id } = this.props;
  	const str = `${id} button ${this.state.button}`;
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggle}>{str}</button>
      </div>
    )
  }
}