import React, { Component } from 'react'
import axios from 'axios'
export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(((res)=>{
            this.setState({posts: res.data})}
        )).catch((errr)=>console.log(errr))
    }
  render() {
    const {posts}=this.state
    return (
      <div>
      <table><tr><th style={{
                             paddingRight: 50,
                             border: '1px solid',
                             borderCollapse: 'collapse'}}>id</th>
                             <th style={{border: '1px solid',
                                         width: '100%'}}>Title</th></tr></table>
      <p>{posts.map((val)=>(<table key={val.id}><tr style={{border: '1px solid',
                                                            borderCollapse: 'collapse'}}>
                                                            <td style={{width:'50px',
                                                            paddingRight: 50,
                                                            border: '1px solid',
                                                            borderCollapse: 'collapse'}}>
                                                            {val.id}</td>
                                                            <td style={{border: '1px solid',
                                                            width: '100%'}}>{val.title}</td></tr></table>))}</p>
      </div>
    )
  }
}
