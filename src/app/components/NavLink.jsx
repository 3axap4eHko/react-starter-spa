import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const { object, string, oneOfType, node } = PropTypes;

function NavLink(props, context) {
  const { to, children, ...linkProps } = props;
  const { router } = context;
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

NavLink.contextTypes = {
  router: object.isRequired,
};

export default NavLink;
