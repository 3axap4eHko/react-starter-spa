import React, { Component } from 'react';
import Route from 'react-steersman/Route';
import withStyles from 'react-jss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './containers/Home';
import About from './containers/About';
import NotFound from './containers/NotFound';

import styleApp from './containers/App.style';

@withStyles(styleApp)
export default class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Nav />
        <div className={classes.content}>
          <Route path="/" children={Home} group="main" />
          <Route path="/about" children={About} group="main" />
          <Route path=".*" children={NotFound} group="main" />
        </div>
        <Footer />
      </div>
    );
  }
}

