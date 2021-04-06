// Imports
import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { About, Dashboard, PageNotFound } from './components';

// Component
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Dashboard} />
      <Route path="/:wildcard" component={PageNotFound} />
    </Switch>
  );
};

// Exports
// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
