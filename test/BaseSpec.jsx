import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';

describe('Base test suite', () => {
  it('Render test', () => {
    renderIntoDocument(<div>test</div>);
  });
});
