import React from 'react';
import {render} from 'react-dom';
import offline from 'offline-plugin/runtime';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';

import store from './redux/store';
import routes from './routes';

if (process.env.NODE_ENV === 'development') {
  offline.install();
}

export const Root = () => (
  <IntlProvider locale="en">
    <Provider store={store}>
      <Router history={hashHistory} routes={routes}/>
    </Provider>
  </IntlProvider>
);

if (!module.hot) {
  render(<Root />, document.getElementById('app'));
}