import React from 'react';
import { render } from 'react-dom';
import { Steersman, createHashHistory } from 'react-steersman';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import offline from 'offline-plugin/runtime';
import AppContainer from './App';

import createStore from './redux/createStore';
import theme from './theme';

if (process.env.NODE_ENV === 'production') {
  offline.install();
}

function mapProps(props) {
  const { direction, status } = props;
  return {
    ...props,
    transitionClassName: `page-animation page-${direction}-${status}`,
  };
}

const Root = () => (
  <Provider store={createStore()}>
    <ThemeProvider theme={theme}>
      <Steersman history={createHashHistory()} transitionTimeout={1000} mapProps={mapProps}>
        <AppContainer />
      </Steersman>
    </ThemeProvider>
  </Provider>
);

if (!module.hot) {
  render(<Root />, document.getElementById('app'));
}

export default Root;
