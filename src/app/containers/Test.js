import React, { Component } from 'react';
import { connect } from 'react-redux';
import appChangeValue from '../redux/actions/app/change-value';

@connect(({ app }) => ({ app }), { appChangeValue })
export default class Test extends Component {
  render() {
    const { app, appChangeValue: change, className } = this.props;
    return (
      <div className={className}>
        Value: {app.value}
        <button onClick={() => change(1)}>+</button>
        <button onClick={() => change(-1)}>-</button>
      </div>
    );
  }
}
