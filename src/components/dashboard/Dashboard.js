// Imports
import React from 'react';

import {
  NamesGenerate,
  NamesDisplay,
  SuggestionBox,
  Disclaimer,
  MadeBy,
} from '..';

// Component
const Dashboard = () => {
  return (
    <>
      <div className="row padding-bottom">
        <NamesGenerate />

        <NamesDisplay />
      </div>

      <div className="container">
      <SuggestionBox />

      <Disclaimer />

      <MadeBy />
      </div>
    </>
  );
};

// Exports
export default Dashboard;
