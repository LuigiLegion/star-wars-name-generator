// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOutThunkCreator } from '../../store';

// Component
const SignedInLinks = ({ fullName, signOutThunk }) => {
  return (
    <ul className="right">
      <li className="navbar-link">
        <NavLink
          className="text-style-glow"
          to="/"
        >
          {fullName ? `Welcome back, ${fullName}.` : 'Hello, guest.'}
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
          className="text-style-bold text-style-glow"
          href="https://taluigi.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </li>

      <li className="navbar-link">
        <NavLink
          className="text-style-bold text-style-glow padding-right"
          to="/"
          onClick={signOutThunk}
        >
          Sign Out
        </NavLink>
      </li>
    </ul>
  );
};

// Container
const mapStateToProps = state => ({
  fullName: state.firebase.profile.fullName,
});

const mapDispatchToProps = dispatch => ({
  signOutThunk: () => dispatch(signOutThunkCreator()),
});

// Prop Types
SignedInLinks.propTypes = {
  fullName: PropTypes.string,
  signOutThunk: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignedInLinks);
