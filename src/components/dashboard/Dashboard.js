import React from 'react';

import GenerateNames from '../names/GenerateNames';
import DisplayNames from '../names/DisplayNames';

const Dashboard = props => {
  return (
    <div className="dashboard container">
      <div>
        <div className="row">
          <div className="col s12 m6">
            <GenerateNames />
          </div>

          <div className="col s12 m5 offset-m0.5">
            <DisplayNames />
          </div>
        </div>

        <div className="center-text padding-bottom">
          <div>Like your new Star Wars name?</div>
          Tweet it at me{' '}
          <a
            href="https://twitter.com/LuigiLegion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bold-text-style">@LuigiLegion</span>
          </a>
          <div>#StarWars #TheRiseOfSkywalker</div>
        </div>

        <div className="center-text padding-bottom">
          Made with ❤ by{' '}
          <a
            href="http://taluigi.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bold-text-style">Tal Luigi</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
