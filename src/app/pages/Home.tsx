import React from 'react';
import Cargo from './Cargo.svg';
import Page from '../components/Page';

export default function Home() {
  return (
    <Page title="Create your application faster.">
      <img src={Cargo} alt="React Starter SPA" />
    </Page>
  );
}
