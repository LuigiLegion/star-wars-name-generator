// Imports
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Dashboard from './components/dashboard/Dashboard';
import PageNotFound from './components/404/PageNotFound';

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
