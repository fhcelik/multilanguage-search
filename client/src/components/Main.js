import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Result from '../containers/resultContainer';
import SearchResults from '../containers/searchContainer';

const Main = () => (
  <Switch>
    <Route  exact path='/' component={Home}/>
    <Route  path='/entries/:word/:lang' component={Result} />
    <Route  path='/results' component={SearchResults} />
  </Switch>
);

export default Main;