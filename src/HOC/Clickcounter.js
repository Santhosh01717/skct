import React, { Component } from 'react'

 class Clickcounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name: "jk"
      }
    }
  render() {
    return (
      <div>
      {this.props.name}
        <button onClick={()=>this.setState({count:this.state.count+1})}>ClickMe{this.state.count}</button>
      </div>
    )
  }
}
export default EnComponent(Clickcounter);