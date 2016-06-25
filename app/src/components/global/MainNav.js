import React from 'react';
import { Link } from'react-router';

export default class MainNav extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <Link to="/" className="nav-item">BeeApp</Link>
          </div>
          <span className="nav-toggle">
            <span></span>
             <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/" className="nav-item">サークル</Link>
            <Link to="/" className="nav-item">イベント</Link>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
