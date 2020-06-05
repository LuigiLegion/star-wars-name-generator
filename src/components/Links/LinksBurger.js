// Imports
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import { burgerStyles } from '../../styles';

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
    <div>
      <Menu
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
        right
        width="50%"
        styles={burgerStyles}
      >
        <div className="remove-outline">
          <div>
            <NavLink to="/about" onClick={closeMenu}>
              <span className="text-style-bold text-style-glow">About</span>
            </NavLink>
          </div>

          <div>
            <a
              onClick={closeMenu}
              href="https://github.com/LuigiLegion/star-wars-name-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-style-bold text-style-glow">Source</span>
            </a>
          </div>

          <div>
            <a
              onClick={closeMenu}
              href="https://github.com/LuigiLegion/star-wars-name-generator/tree/master/src/data/sets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-style-bold text-style-glow">Data Sets</span>
            </a>
          </div>

          <div>
            <a
              onClick={closeMenu}
              href="https://taluigi.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-style-bold text-style-glow">
                Contact Info
              </span>
            </a>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default LinksBurger;
