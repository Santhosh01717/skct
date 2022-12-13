import { Component } from "react";

const TableHeader = ()=>{
       return (<thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Action</th>
        </tr>
    </thead>
           
       )
}
const TableBody= (props)=>{
    const {charactersData,removeCharacter} = props

    const rows = charactersData.map((character,index)=>{
        return(<tr key={index}>
        <td>{character.name}</td>
        <td>{character.job}</td>
        <td><button onClick={()=>removeCharacter(index)}>Delete</button></td>
        </tr>)
    })
    return (
        <tbody>
            {rows}
        </tbody>
     )
}

class Table extends Component{
        render(){
            const {charactersData,removeCharacter} = this.props
            return (
                <table>
                    <TableHeader/>
                    <TableBody removeCharacter={removeCharacter}  charactersData={charactersData} />                    
                </table>
                
            )
        }
}
export default Table;