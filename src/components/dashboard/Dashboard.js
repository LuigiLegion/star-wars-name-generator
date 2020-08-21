// Imports
import React from 'react';

import NamesGenerate from '../names/NamesGenerate';
import NamesDisplay from '../names/NamesDisplay';
import { generateNamesStyle, displayNamesStyle } from '../../styles';

// Component
const Dashboard = () => {
  return (
    <div className="dashboard container">
      <div>
        <div className="row">
          <div className="col s12 m6" style={generateNamesStyle}>
            <NamesGenerate />
          </div>

          <div className="col s12 m5" style={displayNamesStyle}>
            <NamesDisplay />
          </div>
        </div>

        <div className="text-align-center padding-bottom">
          <div>Like your new Star Wars name?</div>

          <div>
            Tweet it at me{' '}
            <a
              href="https://twitter.com/LuigiLegion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-style-bold">@LuigiLegion</span>
            </a>
          </div>
        </div>

        <div className="text-align-center padding-bottom">
          Made with ❤ by{' '}
          <a
            href="https://www.linkedin.com/in/talluigi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-style-bold">Tal Luigi</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// Exports
export default Dashboard;
