// Imports
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signInThunkCreator } from '../../store';
import burgerStyles from '../../styles';

// Component
const SignedOutLinksBurger = ({ signInThunk }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = state => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Menu
      isOpen={menuOpen}
      onStateChange={state => handleStateChange(state)}
      right
      width="50%"
      styles={burgerStyles}
    >
      <div className="outline-none">
        <div>
          <NavLink
            className="text-style-glow"
            to="/"
            onClick={closeMenu}
          >
            Hello, guest.
          </NavLink>
        </div>

        <li>
          <NavLink
            className="text-style-bold text-style-glow"
            to="/"
            onClick={signInThunk}
          >
            Sign In
          </NavLink>
        </li>

        <li>
          <NavLink
            className="text-style-bold text-style-glow"
            to="/"
            onClick={signInThunk}
          >
            Sign Up
          </NavLink>
        </li>

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
      </div>
    </Menu>
  );
};

// Container
const mapDispatchToProps = dispatch => ({
  signInThunk: () => dispatch(signInThunkCreator()),
});

// Prop Types
SignedOutLinksBurger.propTypes = {
  signInThunk: PropTypes.func,
};

// Exports
export default connect(
  null,
  mapDispatchToProps,
)(SignedOutLinksBurger);
