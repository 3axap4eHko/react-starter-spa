import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import createLink from 'react-steersman/createLink';

const styles = theme => ({
  root: {
    padding: 20,
  },
  activeRoot: {
    backgroundColor: theme.accentColor,
  },
  link: {
    color: theme.color,
  },
  activeLink: {},
});

const NavLink = createLink(({ to, title, classes, navigate, match }) => (
  <li className={classNames(classes.root, { [classes.activeRoot]: match })}>
    <a
      href={to}
      className={classNames(classes.link, { [classes.activeLink]: match })}
      title={title}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {title}
    </a>
  </li>
));

export default withStyles(styles)(NavLink);
