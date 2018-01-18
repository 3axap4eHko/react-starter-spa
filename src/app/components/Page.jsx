import React, { Component } from 'react';
import { string } from 'prop-types';
import withStyles from 'react-jss';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  heading: {
    textAlign: 'center',
  },
});

@withStyles(styles)
export default class Page extends Component {
  static propTypes = {
    title: string.isRequired,
  };

  render() {
    const { classes, title, children } = this.props;
    return (
      <div className={classes.root}>
        <h1 className={classes.heading}>{title}</h1>
        {children}
      </div>
    );
  }
}
