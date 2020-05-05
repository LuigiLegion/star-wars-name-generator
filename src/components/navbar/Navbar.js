// Imports
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Links from '../Links/Links';
import LinksBurger from '../Links/LinksBurger';
import Preloader from './Preloader';
import { navbarStyle } from '../../styles';

// Component
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
        <nav className="nav-wrapper black" style={navbarStyle}>
          <div>
            <NavLink
              to="/"
              className="left brand-logo navbar-logo name-text-positioning"
            >
              <span className="bold-text-style glow-text-style">
                {largeViewCheck ? 'Star Wars Name Generator' : 'SWNameGen'}
              </span>
            </NavLink>

            {largeViewCheck ? <Links /> : <LinksBurger />}
          </div>

          <div>{this.props.isLoading ? <Preloader /> : null}</div>
        </nav>
      </div>
    );
  }
}

// Container
const mapStateToProps = state => ({
  isLoading: state.layout.isLoading,
});

export default connect(mapStateToProps)(Navbar);

// Prop Types
Navbar.propTypes = {
  isLoading: PropTypes.bool,
};
