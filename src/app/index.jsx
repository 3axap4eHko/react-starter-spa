import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import offline from 'offline-plugin/runtime';
import AppContainer from './containers/App';

import store from './redux/store';

if (process.env.NODE_ENV === 'production') {
  offline.install();
}

const Root = () => (
  <IntlProvider locale="en">
    <Provider store={store}>
      <Router>
        <Route path="/" component={AppContainer} />
      </Router>
    </Provider>
  </IntlProvider>
);

if (!module.hot) {
  render(<Root />, document.getElementById('app'));
}

export default Root;
