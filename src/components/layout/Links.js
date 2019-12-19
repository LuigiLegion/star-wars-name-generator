import React from 'react';

const Links = props => {
  return (
    <ul className="right">
      <li>
        <a
          href="https://github.com/LuigiLegion/star-wars-name-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bold-text-style glow-text-style">GitHub Repo</span>
        </a>
      </li>

      <li>
        <a
          href="https://github.com/LuigiLegion/star-wars-name-generator/tree/master/src/data/sets"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bold-text-style glow-text-style">Data Sets</span>
        </a>
      </li>

      <li>
        <a
          href="https://www.wikia.com/api/v1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bold-text-style glow-text-style">Wikia API</span>
        </a>
      </li>

      <li>
        <a
          href="http://taluigi.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bold-text-style glow-text-style">Contact Info</span>
        </a>
      </li>
    </ul>
  );
};

export default Links;
