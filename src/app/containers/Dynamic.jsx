import React, { Component } from 'react';
import { shape, func } from 'prop-types';

class Dynamic extends Component {
  static propTypes = {
    render: shape({
      then: func.isRequired,
      catch: func.isRequired,
    }).isRequired,
  };

  state = {
    AsyncComponent: null,
    loaded: false,
  };

  componentWillMount() {
    const { render } = this.props;
    render.then(module => this.setState({ AsyncComponent: module.default, loaded: true }));
  }

  render() {
    const { AsyncComponent } = this.state;
    if (AsyncComponent) {
      return <AsyncComponent />;
    }
    return null;
  }
}

export default Dynamic;
