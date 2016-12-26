'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
const {any} = PropTypes;

import '../css/global.css';
import './App.css';

class App extends Component {
    static propTypes = {
        children: any
    };

    render() {
        const {children} = this.props;
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
}

function mapStateToProps() {
    return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);