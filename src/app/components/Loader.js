import React, { Component } from 'react';
import { object } from 'prop-types';
import withStyles from 'react-jss';
import Image from './LoaderAnimation.svg';

const styles = () => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

@withStyles(styles)
export default class Loader extends Component {
  static propTypes = {
    classes: object,
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img src={Image} alt="Loading..." />
      </div>
    );
  }
}
