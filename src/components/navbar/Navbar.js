// Imports
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Links, LinksBurger, Preloader } from '..';

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
      <nav className="nav-wrapper black">
        <div>
          <NavLink
            className="left navbar-logo text-style-bold text-style-glow"
            to="/"
          >
            {largeViewCheck ? 'Star Wars Name Generator' : 'SWNameGen'}
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

// Prop Types
Navbar.propTypes = {
  isLoading: PropTypes.bool,
};

// Exports
export default connect(mapStateToProps)(Navbar);
