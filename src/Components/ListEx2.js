import React from 'react'

export default function ListEx2() {
    const cars=[
        {id: 1, model: "Nano"},
        {id: 2, model: "Breeza"},  
        {id: 3,model: "800"} 
    ]
  return (
    <h1>{cars.map((val)=><li key={val.id}>{val.model}</li>)}</h1>
  )
}
