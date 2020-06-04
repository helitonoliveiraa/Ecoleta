import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CreatPoint from '../pages/CreatPoint';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/create-point" component={CreatPoint} />
  </Switch>
);

export default Routes;
