import { Component } from "react";
class Form extends Component{
      initialState = {
        name:"",
        job:""
      }
      state = this.initialState;
      handleChange = (event)=>{
           event.target.value
      }
      render(){
        return(
            <form>
                <label htmlFor="name">Name</label><br/>
                <input type="text" name="name" id="name"
                onChange={this.handleChange} /><br/><br/>
                <label htmlFor="job">Job</label><br/>
                <input type="text" name="job" id="job" 
                  onChange={this.handleChange}
                /><br/>
                <input type="button" value="Submit" />
            </form>
        )
      }
}
export default Form