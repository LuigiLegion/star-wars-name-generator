// Imports
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  SignedInLinks,
  SignedInLinksBurger,
  SignedOutLinks,
  SignedOutLinksBurger,
  Logo,
  Preloader,
} from '..';

// Component
const Navbar = ({ uid, isLoading }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const isLargeView = width > 1024;

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

  if (uid && isLargeView) {
    links = <SignedInLinks />;
  } else if (uid) {
    links = <SignedInLinksBurger />;
  } else if (isLargeView) {
    links = <SignedOutLinks />;
  } else {
    links = <SignedOutLinksBurger />;
  }

  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper black">
        <div>
          <Logo isLargeView={isLargeView} />

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
