// Imports
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  SignedInLinks,
  SignedInLinksBurger,
  SignedOutLinks,
  SignedOutLinksBurger,
  Preloader,
} from '..';

// Component
const Navbar = ({ uid, isLoading }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const largeViewCheck = width > 1024;

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

  let links;

  if (uid && largeViewCheck) {
    links = <SignedInLinks />;
  } else if (uid) {
    links = <SignedInLinksBurger />;
  } else if (largeViewCheck) {
    links = <SignedOutLinks />;
  } else {
    links = <SignedOutLinksBurger />;
  }

  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper black">
        <div>
          <NavLink
            className="left navbar-logo text-style-bold text-style-glow"
            to="/"
          >
            {largeViewCheck ? 'Star Wars Name Generator' : 'SWNG'}
          </NavLink>

          {links}
        </div>

        <div>{isLoading && <Preloader />}</div>
      </nav>
    </div>
  );
};

// Container
const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
  isLoading: state.layout.isLoading,
});

// Prop Types
Navbar.propTypes = {
  uid: PropTypes.string,
  isLoading: PropTypes.bool,
};

// Exports
export default connect(mapStateToProps)(Navbar);
