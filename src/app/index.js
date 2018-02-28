import React from 'react';
import { render } from 'react-dom';
import { Steersman, createHashHistory } from 'react-steersman';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import offline from 'offline-plugin/runtime';
import AppContainer from './containers/App';

import createStore from './redux/createStore';
import theme from './theme';

if (process.env.NODE_ENV === 'production') {
  offline.install();
}

const Root = () => (
  <Provider store={createStore()}>
    <ThemeProvider theme={theme}>
      <Steersman history={createHashHistory()}>
        <AppContainer />
      </Steersman>
    </ThemeProvider>
  </Provider>
);

if (!module.hot) {
  render(<Root />, document.getElementById('app'));
}

export default Root;
