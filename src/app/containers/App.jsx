import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import '../css/global.css';
import './App.css';

function App({ children }) {
  return (
    <div className="site-wrapper-inner">
      <div className="cover-container">
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
