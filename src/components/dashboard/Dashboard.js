// Imports
import React from 'react';

import { NamesGenerate, NamesDisplay } from '..';
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
          <div>Got any suggestions for improvement?</div>

          <div>
            Message them to me{' '}
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
          <div>
            <span className="text-style-bold">Disclaimer:</span> This is a fan
            site intended to encourage interest in Star Wars. This site is not
            an official publication and is not in any way, shape, or form
            affiliated with or endorsed by Star Wars, Lucasfilm, Disney, or any
            of their licensees.
          </div>

          <div>
            Copyrights and trademarks for the films, TV series, and any other
            materials are held by their respective owners and reference to them
            is allowed under the fair use clause of copyright law.
          </div>

          <div>
            This page is in no way intended to harm or undermine the market
            value of Star Wars, Lucasfilm, or Disney, rather to encourage fans
            to engage with and seek out knowledge of characters set in the Star
            Wars universe.
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
