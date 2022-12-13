import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
function Home() {
  const navigate=useNavigate();
  const eventHandler=(event)=>{
      navigate("/search")
  }
  return (
    <body>
      <div class="tot1">
        <p class="add-city">
        No city data to show, please add a city
        </p>
        <div class="slt">
        <button class="button500" onClick={eventHandler}>Select City</button>
        </div>
        </div>
        
      </body>
  )
}

export default Home