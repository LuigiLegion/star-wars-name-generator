// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Component
const Links = () => {
  return (
    <ul className="right">
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
    </ul>
  );
};

// Exports
export default Links;
