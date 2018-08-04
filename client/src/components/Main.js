import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Result from './views/result';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/results/:word/:id' component={Result}/>
  </Switch>
);

export default Main;