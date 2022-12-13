import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Ask.css'
function SearchBar() {
    const navigate=useNavigate();
    const formHandler=(event)=>{
        navigate("/result")
    }
  return (
    <form onSubmit={formHandler}>
          <div class="tot">
        <p class="ask">What you need ?</p>
        <div class="linkclimate">
        <Link class="linkclimate" to="/result"><li>Temperature</li></Link><br/>
        <Link class="linkclimate" to="/fahernheit"><li>Fahrenheit</li></Link><br/>
        <Link class="linkclimate" to="/kelvin"><li>Kelvin</li></Link><br/>
        </div>
    </div>
    </form>
    
  )
}
export default SearchBar;