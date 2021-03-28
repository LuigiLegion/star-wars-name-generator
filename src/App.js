// Imports
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar, About, Dashboard, PageNotFound } from './components';

// Component
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar>Star Wars Name Generator</Navbar>

        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/:wildcard" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

// Exports
export default App;
