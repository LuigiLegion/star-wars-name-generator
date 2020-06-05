// Imports
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Links from '../Links/Links';
import LinksBurger from '../Links/LinksBurger';
import Preloader from './Preloader';

// Component
const Navbar = ({ isLoading }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const largeViewCheck = width > 1007;

  const updateNavbarDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateNavbarDimensions();
    window.addEventListener('resize', updateNavbarDimensions);

    return () => {
      window.removeEventListener('resize', updateNavbarDimensions);
      updateNavbarDimensions();
    };
  }, [width]);

  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper navbar-container black">
        <div>
          <NavLink to="/" className="left navbar-logo">
            <span className="text-style-bold text-style-glow">
              {largeViewCheck ? 'Star Wars Name Generator' : 'SWNameGen'}
            </span>
          </NavLink>

          {largeViewCheck ? <Links /> : <LinksBurger />}
        </div>

        <div>{isLoading ? <Preloader /> : null}</div>
      </nav>
    </div>
  );
};

// Container
const mapStateToProps = state => ({
  isLoading: state.layout.isLoading,
});

export default connect(mapStateToProps)(Navbar);

// Prop Types
Navbar.propTypes = {
  isLoading: PropTypes.bool,
};
