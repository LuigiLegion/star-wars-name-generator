// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
const Links = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/about">
          <span className="text-style-bold text-style-glow">About</span>
        </NavLink>
      </li>

      <li>
        <a
          href="https://github.com/LuigiLegion/star-wars-name-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-style-bold text-style-glow">Source</span>
        </a>
      </li>

      <li>
        <a
          href="https://github.com/LuigiLegion/star-wars-name-generator/tree/master/src/data/sets"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-style-bold text-style-glow">Data Sets</span>
        </a>
      </li>

      <li>
        <a
          href="https://taluigi.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-style-bold text-style-glow">Contact Info</span>
        </a>
      </li>
    </ul>
  );
};

// Exports
export default Links;
