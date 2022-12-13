import axios from "axios";
import { useEffect, useState } from "react";
import './SearchBar.css'

function Result() {
    const apiKey = "f56f24967aaf51182d1d4df628297c6d"
    const [inputCity, setInputCity] = useState("")
    const [data, setData] = useState({})
  
  
    const getWetherDetails = (cityName) => {
      if (!cityName) return
      const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
      axios.get(apiURL).then((res) => {
        console.log("response", res.data)
        setData(res.data)
      }).catch((err) => {
        console.log("err", err)
      });
      

      
    
    
      
    }
  
    const handleChangeInput = (e) => {
      console.log("value", e.target.value)
      setInputCity(e.target.value)
    }
  
    const handleSearch = () => {
      getWetherDetails(inputCity)
    }
  
  
    return (
      <div class="tot0">
        <div className="wetherBg">
          <div className="tot">
            <input type="text" className="form-control"
              value={inputCity}
              onChange={handleChangeInput} />
            <button className="btnsearch"
              onClick={handleSearch}>Search</button>
          </div>
        </div>
  
        {Object.keys(data).length > 0 &&
          <div className="col-md-12 text-center mt-5">
  
            <div className="result-box">
              
  
              <p className="weather-city">
                {data.name}
              </p>
              <p className="weather-Temp">{((data.main.temp) - 273.15).toFixed(2)}°C</p>
            </div>
          </div>
        }
  
      </div>
    );
}

export default Result