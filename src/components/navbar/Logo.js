import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ largeViewCheck }) => {
  return (
    <NavLink
      className="left navbar-logo text-style-bold text-style-glow"
      to="/"
    >
      {largeViewCheck ? 'Star Wars Name Generator' : 'SWNG'}
    </NavLink>
  )
};

Logo.propTypes = {
  largeViewCheck: PropTypes.bool,
};

export default Logo;
