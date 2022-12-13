import './App.css';
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
class App extends Component{
   
  state =  {
       characters : [{
        name: 'charlie',
        job: 'janitor'
      },
      {
        name: 'chaplin',
        job: 'engineer'
      },
      {
        name: 'Johnny',
        job: 'doctor'
      },
      {
        name: 'Dany',
        job: 'Actor'
      }]
    }

  removeCharacter = (index)=>{
      const {characters} = this.state

      let filtered = characters.filter((character,i)=>{
        return i!==index
      });

      this.setState({characters: filtered});
  }
  render(){
      const {characters} = this.state
  

      return (
        <div className="App">
          <h1>Table</h1>
          <Table removeCharacter={this.removeCharacter} charactersData={characters}/>
          <Form/>
        </div>
  )
}
}



export default App