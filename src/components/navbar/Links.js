// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signInThunkCreator, signOutThunkCreator } from '../../store';

// Component
const Links = ({
  fullName,
  signInThunk,
  signOutThunk
}) => {
  return (
    <ul className="right">
      <li>
        <NavLink
          className="text-style-glow"
          to="/"
        >
          {fullName ? `Welcome back, ${fullName}.` : 'Hello, guest.'}
        </NavLink>
      </li>

      {!fullName &&
        <>
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
        </>
      }

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
          className={`text-style-bold text-style-glow${!fullName ? ' padding-right' : ''}`}
          href="https://taluigi.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </li>

      {fullName &&
        <li>
        <NavLink
          className="text-style-bold text-style-glow padding-right"
          to="/"
          onClick={signOutThunk}
        >
          Sign Out
        </NavLink>
        </li>
      }
    </ul>
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
Links.propTypes = {
  fullName: PropTypes.string,
  signInThunk: PropTypes.func,
  signOutThunk: PropTypes.func,
};

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Links);
