import React from 'react';
import NavLink from './NavLink';

function Nav() {
  return (
    <div className="masthead clearfix">
      <div className="inner">
        <h3 className="masthead-brand">React Redux Starter SPA</h3>
        <nav>
          <ul className="nav masthead-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
