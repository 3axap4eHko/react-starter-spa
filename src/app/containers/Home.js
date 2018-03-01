import React, { Component } from 'react';
import withStyles from 'react-jss';
import Cargo from './Cargo.svg';
import Dynamic from './Dynamic';
import Page from '../components/Page';
import Loader from '../components/Loader';

const styles = () => ({
  root: {},
  dynamic: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

@withStyles(styles)
export default class Home extends Component {
  render() {
    const { classes, transitionClassName } = this.props;

    return (
      <Page title="Create your application faster." className={transitionClassName}>
        <img src={Cargo} alt="React Starter SPA" />
        <div className={classes.dynamic}>
          <Dynamic
            render={async () => {
              const component = await import('./Test');
              return new Promise(r => setTimeout(r, 1000, component));
            }}
            loader={Loader}
          />
        </div>
      </Page>
    );
  }
}
