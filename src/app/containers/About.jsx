import React, { Component } from 'react';
import withStyles from 'react-jss';
import Page from '../components/Page';

const styles = () => ({

});
@withStyles(styles)
export default class About extends Component {
  render() {
    return (
      <Page title="React Redux Starter SPA">
        <p className="lead" />
        <p className="lead">
          <a href="https://github.com/3axap4eHko/react-starter-spa" className="btn btn-lg btn-default">Learn more</a>
        </p>
      </Page>
    );
  }
}
