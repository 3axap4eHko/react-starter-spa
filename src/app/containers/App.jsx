import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import '../css/global.css';
import './App.css';

import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="site-wrapper-inner">
      <div className="cover-container">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
