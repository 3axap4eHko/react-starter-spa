import React from 'react';
import { render } from 'react-dom';
import { Steersman, createHashHistory } from 'react-steersman';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import { IntlProvider } from 'react-intl';
import offline from 'offline-plugin/runtime';
import AppContainer from './containers/App';

import store from './redux/store';
import theme from './theme';

if (process.env.NODE_ENV === 'production') {
  offline.install();
}

const Root = () => (
  <IntlProvider locale="en">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Steersman history={createHashHistory()}>
          <AppContainer />
        </Steersman>
      </ThemeProvider>
    </Provider>
  </IntlProvider>
);

if (!module.hot) {
  render(<Root />, document.getElementById('app'));
}

export default Root;
