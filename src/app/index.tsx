import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import AppContainer from './App';

import theme from './theme';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
        <AppContainer />
    </ThemeProvider>
  </Router>
);

if (!module.hot) {
  render(<Root />, document.getElementById('__app'));
}

export default Root;
