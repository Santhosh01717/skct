import React, { Component } from 'react'

export default class StateEx extends Component {
  constructor(prop) {
    super(prop)
  
    ans = {
      count: 18,
      name: "Santhosh"
    }
  }
  
  render() {
    return (
      <button onClick={()=>this.setState({count: this.ans.count+1})}>click me{this.ans.count}</button>
    )
  }
}
