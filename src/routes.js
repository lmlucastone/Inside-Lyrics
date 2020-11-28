import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import { Register } from './pages/Register';
import { Home } from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export { Routes };
