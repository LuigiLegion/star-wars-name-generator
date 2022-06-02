// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component
const Logo = ({ isLargeView }) => {
  return (
    <NavLink
      className="left navbar-logo text-style-bold text-style-glow"
      to="/"
    >
      {isLargeView ? 'Star Wars Name Generator' : 'SWNG'}
    </NavLink>
  )
};

// Prop Types
Logo.propTypes = {
  isLargeView: PropTypes.bool,
};

// Exports
export default Logo;
