import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
