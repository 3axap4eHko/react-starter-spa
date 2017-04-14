import React from 'react';
import Cargo from './Cargo.svg';
import Dynamic from './Dynamic';

function Home() {
  return (
    <div className="inner cover">
      <h1 className="cover-heading">Create your application faster.</h1>
      <img src={Cargo} alt="React Starter SPA" />
      <Dynamic render={import('./Test')} />
    </div>
  );
}

export default Home;
