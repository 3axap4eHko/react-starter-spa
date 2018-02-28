import React, { Component } from 'react';
import { object } from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';
import { Match } from 'react-steersman';

const styles = theme => ({
  root: {},
  link: {
    color: theme.color,
  },
});

@withStyles(styles)
export default class Link extends Component {
  static contextTypes = {
    history: object,
  };

  onClick = (event) => {
    event.preventDefault();
    const { history } = this.context;
    if (history.location.pathname !== this.props.to) {
      history.push(this.props.to);
    }
  };

  render() {
    const {
      classes,
      to,
      exact,
      strict,
      children,
      ...rest
    } = this.props;

    return (
      <Match
        path={to}
        exact={exact}
        strict={strict}
        children={({ match }) => (
          <li className={classNames(classes.root, { active: !!match })}>
            <a
              {...rest}
              href={to}
              onClick={this.onClick}
              className={classNames(classes.link)}
            >
              {children}
            </a>
          </li>
        )}
      />
    );
  }
}
