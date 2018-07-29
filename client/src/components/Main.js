import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/homeContainer';
import Result from './views/result';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/results' component={Result}/>
  </Switch>
);

export default Main;