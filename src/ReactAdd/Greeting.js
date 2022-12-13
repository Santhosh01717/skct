import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Greeting extends Component {
  render() {
    return (
      <div>{this.props.name}
      {this.props.id}</div>
    );
  }
}
Greeting.PropsTypes={
    name: PropTypes.string,
    id: PropTypes.number.isRequired
}
Greeting.defaultProps={
    name: "adc"
};

