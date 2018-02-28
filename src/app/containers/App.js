import React, { Component } from 'react';
import { Route } from 'react-steersman';
import withStyles from 'react-jss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from './Home';
import About from './About';

import styleApp from './App.style';

@withStyles(styleApp)
export default class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Nav />
        <Route path="/" children={Home} />
        <Route path="/about" children={About} />
        <Footer />
      </div>
    );
  }
}

