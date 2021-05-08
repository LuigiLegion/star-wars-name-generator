// Imports
import React from 'react';

import {
  NamesGenerate,
  NamesDisplay,
  SuggestionBox,
  Disclaimer,
  MadeBy,
} from '..';
import { generateNamesStyle, displayNamesStyle } from '../../styles';

// Component
const Dashboard = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6" style={generateNamesStyle}>
          <NamesGenerate />
        </div>

        <div className="col s12 m5" style={displayNamesStyle}>
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
