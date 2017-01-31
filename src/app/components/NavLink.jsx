'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

const {any, object, string, oneOfType} = PropTypes;

class NavLink extends Component {
  static contextTypes = {
    router: object
  };
  static propTypes = {
    to: oneOfType([string, object]),
    children: any
  };

  render() {
    const {to, children, ...props} = this.props;
    const {router} = this.context;
    const isActive = router.isActive(to, true);
    return (
      <li className={isActive && 'active'}>
        <Link to={to} {...props}>{children}</Link>
      </li>
    );
  }
}

export default NavLink;