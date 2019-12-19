import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PlaceholderPage from './components/placeholder/PlaceholderPage';

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar>Star Wars Name Generator</Navbar>

        <Switch>
          <Route path="/placeholder" component={PlaceholderPage} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
