import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from '../containers/App';
import Home from '../containers/Home';
import About from '../containers/About';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);
