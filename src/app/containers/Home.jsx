import React from 'react';
import Cargo from './Cargo.svg';

function Home() {
  return (
    <div className="inner cover">
      <h1 className="cover-heading">Create your application faster.</h1>
      <img src={Cargo} alt="React Starter SPA" />
    </div>
  );
}

export default Home;
