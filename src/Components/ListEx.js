import React from 'react'
export default function ListEx(){
    const cars=["Nano", "800", "Breeza", "Scorpio"];
    return (
      <div>{cars.map( (i)=> i+"Good ")}</div>
       )
 }