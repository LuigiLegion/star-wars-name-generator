// Imports
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signInThunkCreator, signOutThunkCreator } from '../../store';
import burgerStyles from '../../styles';

// Component
const LinksBurger = ({
  fullName,
  signInThunk,
  signOutThunk
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = state => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSignInOrUp = () => {
    closeMenu();
    signInThunk();
  }

  const handleSignOut = () => {
    closeMenu();
    signOutThunk();
  }

  return (
    <Menu
      isOpen={menuOpen}
      onStateChange={state => handleStateChange(state)}
      right
      width="50%"
      styles={burgerStyles}
    >
      <div className="outline-none">
        <div className="welcome-back-container">
          <NavLink
            className="text-style-glow"
            to="/"
            onClick={closeMenu}
          >
            <div className="white-space-pre line-height-reset">
              {fullName ? `Welcome back,\n${fullName}.` : 'Hello, guest.'}
            </div>
          </NavLink>
        </div>

        {!fullName &&
          <>
            <div>
              <NavLink
                className="text-style-bold text-style-glow"
                to="/"
                onClick={handleSignInOrUp}
              >
                Sign In
              </NavLink>
            </div>

            <div>
              <NavLink
                className="text-style-bold text-style-glow"
                to="/"
                onClick={handleSignInOrUp}
              >
                Sign Up
              </NavLink>
            </div>
          </>
        }

        <div>
          <NavLink
            className="text-style-bold text-style-glow"
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>
        </div>

        <div>
          <NavLink
            className="text-style-bold text-style-glow"
            to="/changelog"
            onClick={closeMenu}
          >
            Changelog
          </NavLink>
        </div>

        <div>
          <a
            className="text-style-bold text-style-glow"
            href="https://github.com/LuigiLegion/star-wars-name-generator"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Source
          </a>
        </div>

        <div>
          <a
            className="text-style-bold text-style-glow"
            href="https://github.com/LuigiLegion/star-wars-name-generator-data/tree/master/data"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Data
          </a>
        </div>

        <div>
          <a
            className="text-style-bold text-style-glow"
            href="https://taluigi.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>

        {fullName &&
          <div>
            <NavLink
              className="text-style-bold text-style-glow"
              to="/"
              onClick={handleSignOut}
              >
              Sign Out
            </NavLink>
          </div>
        }
      </div>
    </Menu>
  );
};

// Container
const mapStateToProps = state => ({
  fullName: state.firebase.profile.fullName,
});

const mapDispatchToProps = dispatch => ({
  signInThunk: () => dispatch(signInThunkCreator()),
  signOutThunk: () => dispatch(signOutThunkCreator()),
});

// Prop Types
LinksBurger.propTypes = {
  fullName: PropTypes.string,
  signInThunk: PropTypes.func,
  signOutThunk: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksBurger);
