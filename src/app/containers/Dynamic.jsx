import React, { Component } from 'react';
import { func } from 'prop-types';

class Dynamic extends Component {
  static propTypes = {
    render: func.isRequired,
    loader: func,
  };

  static defaultProps = {
    loader: null,
  };

  state = {
    AsyncComponent: null,
    loaded: false,
  };

  componentWillMount() {
    const { render } = this.props;
    let AsyncComponent;
    render().then(module =>
      (AsyncComponent = module.default || module) &&
      this.setState({ AsyncComponent, loaded: true }),
    );
  }

  render() {
    const { AsyncComponent } = this.state;
    if (AsyncComponent) {
      return <AsyncComponent />;
    }
    const { loader: Loader } = this.props;
    if (Loader) {
      return <Loader />;
    }
    return null;
  }
}

export default Dynamic;
