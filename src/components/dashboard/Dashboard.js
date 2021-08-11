// Imports
import React from 'react';

import {
  NamesGenerate,
  NamesDisplay,
  SuggestionBox,
  Disclaimer,
  MadeBy,
} from '..';
import { namesGenerateStyle, namesDisplayStyle } from '../../styles';

// Component
const Dashboard = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6" style={namesGenerateStyle}>
          <NamesGenerate />
        </div>

        <div className="col s12 m6" style={namesDisplayStyle}>
          <NamesDisplay />
        </div>
      </div>

      <SuggestionBox />

      <Disclaimer />

      <MadeBy />
    </div>
  );
};

// Exports
export default Dashboard;
