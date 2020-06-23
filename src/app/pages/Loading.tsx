import React from 'react';
import Page from '../components/Page';
import Loader from '../components/Loader';

export default function Loading() {
  return (
    <Page title="Create your application faster.">
      <Loader />
    </Page>
  );
}
