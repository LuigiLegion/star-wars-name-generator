import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Links from './Links';
import LinksBurger from './LinksBurger';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      width: 0,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const largeViewCheck = this.state.width > 1007;

    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper black">
          <div>
            <NavLink to="/" className="left brand-logo name-text-positioning">
              <span className="bold-text-style glow-text-style">
                {largeViewCheck ? 'Star Wars Name Generator' : 'SWNameGen'}
              </span>
            </NavLink>

            {largeViewCheck ? <Links /> : <LinksBurger />}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
