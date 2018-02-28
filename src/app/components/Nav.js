import React, { Component } from 'react';
import withStyles from 'react-jss';
import NavLink from './NavLink';

const styles = theme => ({
  root: {
    backgroundColor: theme.primaryColor,
    display: 'flex',
    padding: '0 10px',
  },
  title: {},
  nav: {
    display: 'flex',
    flex: 1,
  },
  list: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    listStyle: 'none',
    '& > *': {
      margin: 5,
    },
  },
});

@withStyles(styles)
export default class Nav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h3 className={classes.title}>React Redux Starter SPA</h3>
        <nav className={classes.nav}>
          <ul className={classes.list}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}
