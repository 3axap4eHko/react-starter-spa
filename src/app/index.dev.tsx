import React from 'react';
import { render } from 'react-dom';
import App from './index';

render(<App />, document.getElementById('__app'));

if (module.hot) {
   module.hot.accept('./index.tsx', function() {
      render(<App />, document.getElementById('__app'));
  });
 }
