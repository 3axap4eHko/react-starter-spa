import React from 'react';
import {
  Route as RRoute,
} from 'react-router-dom';

function Route({ ...props }) {
  return (
    <RRoute {...props} />
  );
}

export default Route;
