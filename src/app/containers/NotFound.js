import React from 'react';
import Page from '../components/Page';

export default function NotFound({ transitionClassName }) {
  return (
    <Page title="Ooops!" className={transitionClassName}>
      Seems like wrong URL
    </Page>
  );
}
