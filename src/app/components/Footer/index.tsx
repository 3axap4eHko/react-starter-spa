import React from 'react';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <a href="https://github.com/3axap4eHko/react-starter-spa">React Starter SPA</a>, by
      <a href="https://twitter.com/3axap4eHko"> @3axap4eHko</a>.
    </footer>
  );
}
