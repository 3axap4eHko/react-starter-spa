import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'; // eslint-disable-line  import/no-extraneous-dependencies
import App from './index';

const HotApp = hot(module)(App);
ReactDOM.render(<HotApp />, document.getElementById('app'));
