import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyReactComponent1 extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string,
  };

  render() {
    const {
      width, height, color, text,
    } = this.props;

    return (
      <div
        style={{
          width: width || 100,
          height: height || 100,
          backgroundColor: color || 'blue',
        }}
      >
        {text}
      </div>
    );
  }
}
