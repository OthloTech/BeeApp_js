import React from 'react';
import b from '../lib/b';
import { Link } from'react-router';

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 }
  }

  componentWillMount() {
    this.props.initialize()
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <div className={b('mainNavLayout')}>
          <div className={b('mainNav')}>
            <div class={b('mainNav', 'logo')}>
              <Link to="/">BeeApp</Link>
            </div>
            <div className={b('mainNavSection')}>
              <ul className={b('mainNavLinks')}>
                <li className={b('mainNavLink')}>
                  <Link className={b('mainNavLink', 'main')} to="/">AAAAAA</Link>
                </li>
                <li className={b('mainNavLink')}>
                  <Link className={b('mainNavLink', 'main')} to="/">BBBBBB</Link>
                </li>
                <li className={b('mainNavLink')}>
                  <Link className={b('mainNavLink', 'main')} to="/">CCCCCC</Link>
                </li>
                <li className={b('mainNavLink')}>
                  <Link className={b('mainNavLink', 'main')} to="/">DDDDDD</Link>
                </li>
                <li className={b('mainNavLink')}>
                  <Link className={b('mainNavLink', 'main')} to="/">EEEEEE</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}
