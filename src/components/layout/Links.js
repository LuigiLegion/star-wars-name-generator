import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/placeholder">
          <span className="bold-text-style glow-text-style">Placeholder</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
