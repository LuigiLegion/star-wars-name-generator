import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Logo.propTypes = {
  isLargeView: PropTypes.bool,
};

export default Logo;
