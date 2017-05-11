import React from 'react';
import Image from './LoaderAnimation.svg';

import './Loader.css';

export default function Loader() {
  return (
    <div className="c-loader">
      <img src={Image} alt="Loading..." />
    </div>
  );
}
