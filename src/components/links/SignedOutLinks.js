// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signInThunkCreator } from '../../store';

// Component
const SignedOutLinks = ({ signInThunk }) => {
  return (
    <ul className="right">
      <li>
        <NavLink
          className="text-style-glow"
          to="/"
        >
          Hello, guest.
        </NavLink>
      </li>

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

      <li>
        <NavLink
          className="text-style-bold text-style-glow"
          to="/about"
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          className="text-style-bold text-style-glow"
          to="/changelog"
        >
          Changelog
        </NavLink>
      </li>

      <li>
        <a
          className="text-style-bold text-style-glow"
          href="https://github.com/LuigiLegion/star-wars-name-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </li>

      <li>
        <a
          className="text-style-bold text-style-glow"
          href="https://github.com/LuigiLegion/star-wars-name-generator-data/tree/master/data"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data
        </a>
      </li>

      <li>
        <a
          className="text-style-bold text-style-glow padding-right"
          href="https://taluigi.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

// Container
const mapDispatchToProps = dispatch => ({
  signInThunk: () => dispatch(signInThunkCreator()),
});

// Prop Types
SignedOutLinks.propTypes = {
  signInThunk: PropTypes.func,
};

// Exports
export default connect(
  null,
  mapDispatchToProps,
)(SignedOutLinks);
