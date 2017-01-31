import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const { object, string, oneOfType, node } = PropTypes;

function NavLink(props) {
  const { to, children, ...linkProps } = props;
  const { router } = this.context;
  const isActive = router.isActive(to, true);
  return (
    <li className={isActive && 'active'}>
      <Link to={to} {...linkProps}>{children}</Link>
    </li>
  );
}

NavLink.propTypes = {
  to: oneOfType([string, object]).isRequired,
  children: node.isRequired,
};

export default NavLink;
