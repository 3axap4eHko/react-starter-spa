import React, { Component } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import withStyles from 'react-jss';

const styles = () => ({
  root: {
    position: 'relative',
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
    const {
      classes,
      className,
      title,
      children,
    } = this.props;

    return (
      <div className={classNames(classes.root, className)}>
        <h1 className={classes.heading}>{title}</h1>
        {children}
      </div>
    );
  }
}
