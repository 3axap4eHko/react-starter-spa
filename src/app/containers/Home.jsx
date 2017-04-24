import React from 'react';
import Cargo from './Cargo.svg';
import Dynamic from './Dynamic';
import Loader from '../components/Loader';

function Home() {
  return (
    <div className="inner cover">
      <h1 className="cover-heading">Create your application faster.</h1>
      <img src={Cargo} alt="React Starter SPA" />
      <Dynamic render={() => import('./Test').then(m => new Promise(r => setTimeout(r, 1000, m)))} loader={Loader} />
    </div>
  );
}

export default Home;
