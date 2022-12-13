import React, { useEffect } from 'react'
import axios from 'axios'

export default function GetEx2() {
    const [posts,setPosts]=([]);
    useEffect(()=>{
        axios.get("db.json")
        .then(((res)=>{
         setPosts({res})}
        )).catch((errr)=>console.log(errr))
    })
  return (
    <div>
      <table>
        <tr>
        <th style={{ paddingRight: 50,border: '1px solid',borderCollapse: 'collapse'}}>id</th>
        <th style={{border: '1px solid',width: '100%'}}>Title</th>
        </tr>
      </table>
      <div>
      {posts.map((val)=>(
        <table key={val.id}>
        <tr style={{border: '1px solid',borderCollapse: 'collapse'}}>
         <td style={{width:'50px',paddingRight: 50,border: '1px solid',borderCollapse: 'collapse'}}>{val.userId}</td>
         <td style={{border: '1px solid',width: '100%'}}>{val.name}</td></tr></table>))}
     </div>
    </div>
  )
}
