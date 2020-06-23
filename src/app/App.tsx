import React, { useEffect, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NProgress from 'nprogress';
import Nav from './components/Nav';
import Loader from './components/Loader';
import Footer from './components/Footer';

import useStyles from './App.style';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Loading = React.lazy(() => import('./pages/Loading'));

const NotFound = React.lazy(() => import('./pages/NotFound'));


NProgress.start();

export default function App() {
  const classes = useStyles();

  useEffect(() => {
    NProgress.done();
  });

  return (
    <>
      <Nav />
      <main className={classes.content}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/loading" component={Loading} />
            <Route path=".*" component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
