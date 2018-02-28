import React, { Component } from 'react';
import { func } from 'prop-types';

export default class Dynamic extends Component {
  static propTypes = {
    render: func.isRequired,
    loader: func,
  };

  static defaultProps = {
    loader: null,
  };

  state = {
    AsyncComponent: null,
  };

  async componentWillMount() {
    const { render } = this.props;
    const module = await render();
    const AsyncComponent = module.default || module;
    if (!this.unmounted) {
      this.setState({ AsyncComponent });
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
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
