import React, { Component } from 'react'

export default class Ex extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "kumar",
         age: 19
      }
    }
  render() {
    this.setState({age: this.state.age});
    return (
      <div>{this.state.name}{this.state.age}</div>
    )
  }
}
