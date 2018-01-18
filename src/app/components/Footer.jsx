import React, { Component } from 'react';
import withStyles from 'react-jss';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
});

@withStyles(styles)
export default class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <a href="https://github.com/3axap4eHko/react-starter-spa">React Redux Starter SPA</a>, by
        <a href="https://twitter.com/3axap4eHko"> @3axap4eHko</a>.
      </div>
    );
  }
}

