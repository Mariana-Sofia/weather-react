import React, { useState } from "react";
import axios from "axios";
import Forecast from "./forecast";
import WeatherInfo from "./WeatherInfo";

import "./App.css";

 export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");
  let [loaded, setLoaded] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemp(response) {
    console.log(response.data)
    setLoaded(true);
    setWeather({
      max:response.data.main.temp_max,
      min:response.data.main.temp_min,
      feels_like: response.data.main.feels_like,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5fc1e7ef8b2560b54bb5e53c834819ac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }
  let form = (
    <form onSubmit={handleSubmit}>
        <div className="col-10">
          <input type="search" placeholder="Enter a city"  className="form-control" autoFocus="on" onChange={updateCity} />
          </div>
      <div className="row">
        <div className="col-3"></div>

        <div className="col-3">
          <input type="submit" className="btn btn-info" value="Current Position" />
        </div>

        <div className="col-3">
          <input type="submit" className="btn btn-info" value="Search" />
        </div>

        <div className="col-3"></div>
      </div>

    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        
        <WeatherInfo data={weather}/>
        
        
        
        <Forecast/>
        </div>
    );
  } else {
    return (
      <div>
        {form}
        <div className="sentence">
        <h2>
          "Dear Weather, 
        </h2>
        
        <h3>
          Stop showind off. We get it, you're hot"
          </h3>
        </div>
      </div>
      );
  }
}
