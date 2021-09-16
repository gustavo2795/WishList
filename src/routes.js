import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function Routes() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" exact component={Favorites} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
