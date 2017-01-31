import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer as Hot} from 'react-hot-loader';

import Root from '../src/app';

const path = '../src/app';
const render = () => {
  ReactDOM.render(<Hot><Root /></Hot>, document.getElementById('app'));
};

render();

module.hot.accept(path, render);