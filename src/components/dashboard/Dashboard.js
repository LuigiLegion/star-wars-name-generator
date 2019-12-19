// Imports
import React from 'react';
import PropTypes from 'prop-types';

import GenerateNames from '../names/GenerateNames';
import DisplayNames from '../names/DisplayNames';

// Component
const Dashboard = props => {
  // console.log('props in Dashboard: ', props);

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

          <div>
            Tweet it at me{' '}
            <a
              href="https://twitter.com/LuigiLegion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bold-text-style">@LuigiLegion</span>
            </a>
          </div>

          <div>#StarWars #TheRiseOfSkywalker</div>
        </div>

        <div className="center-text padding-bottom">
          Made with ❤ by{' '}
          <a
            href="https://www.linkedin.com/in/talluigi"
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

// Prop Types
Dashboard.propTypes = {
  props: PropTypes.object,
};
