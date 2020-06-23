import  { useEffect } from 'react';
import NProgress from 'nprogress';
import useStyles from './styles';

export default function Loader() {
  useStyles();

  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  });

  return null;
}
