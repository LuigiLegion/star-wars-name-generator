import React from 'react';

import GenerateNames from '../names/GenerateNames';
import DisplayNames from '../names/DisplayNames';

const Dashboard = props => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <GenerateNames />
        </div>

        <div className="col s12 m5 offset-m0.5">
          <DisplayNames />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
