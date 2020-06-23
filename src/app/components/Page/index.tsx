import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export interface PageProps {
  className?: string
  title?: string
  children: React.ReactNode
}

export default function Page({ className, title, children }: PageProps) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <h1 className={classes.heading}>{title}</h1>
      {children}
    </div>
  );
}
