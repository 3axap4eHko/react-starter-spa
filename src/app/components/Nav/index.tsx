import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function Nav() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <h3 className={classes.title}>React Starter SPA</h3>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <Link to="/" title="Home" >Home</Link>
          <Link to="/loading" title="Loading" >Loading...</Link>
          <Link to="/about" title="About" >About</Link>
        </ul>
      </nav>
    </header>
  );
}
