'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import If from 'react-snippets/If';
import {appLoad} from '../redux/actions';
import Starter from '../composers/Starter';
const {any} = PropTypes;

import './App.css';

class App extends Component {
    static propTypes = {
        children: any
    };
    readyRender = () => this.props.children;
    waitingRender = () => <Starter/>;
    render() {
        const {children} = this.props;
        return <div>
            <If is={!!children}
                render={this.readyRender}
                elseRender={this.waitingRender}
            />
        </div>;
    }
}

function mapStateToProps() {
    return {};
}

const mapDispatchToProps = {
    appLoad
};

export default connect(mapStateToProps, mapDispatchToProps)(App);