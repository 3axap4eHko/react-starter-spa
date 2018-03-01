import React from 'react';
import { render } from 'react-dom';
import Steersman from 'react-steersman/Steersman';
import createHashHistory from 'react-steersman/createHashHistory';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import AppContainer from './App';

import createStore from './redux/createStore';
import theme from './theme';

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
      <Steersman history={createHashHistory()} transitionTimeout={375} mapProps={mapProps}>
        <AppContainer />
      </Steersman>
    </ThemeProvider>
  </Provider>
);

if (!module.hot) {
  render(<Root />, document.getElementById('app'));
}

export default Root;
