// Imports
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import burgerStyles from '../../styles';

// Component
const LinksBurger = () => {
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
          <NavLink to="/about" onClick={closeMenu}>
            <span className="text-style-bold text-style-glow">About</span>
          </NavLink>
        </div>

        <div>
          <NavLink to="/changelog" onClick={closeMenu}>
            <span className="text-style-bold text-style-glow">Changelog</span>
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

// Exports
export default LinksBurger;
