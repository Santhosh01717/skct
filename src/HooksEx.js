import React, { useEffect, useState } from 'react'
function HooksEx() {
    const[count,setCount]=useState(0);
    let inc1=()=>{
        setCount(count+1);
    }
    let dec1=()=>{
        setCount(count-1);
    }
    let inc5=()=>{
        setCount(count+5);
    }
    useEffect(()=>{
        document.title="Hi";
        console.log({count})

    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc1} style={{color: "red"}}>increment by 1</button><br/><br/>
      <button onClick={dec1} style={{color: "blue"}}>decrement by 1</button><br/><br/>
      <button onClick={inc5}>increment by 5</button><br/>

    </div>

  )
}

export default HooksEx