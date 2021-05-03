import React, { useState } from "react";
import axios from "axios";

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
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
          <input type="search" placeholder="Enter a city" className="form-control" onChange={updateCity} />
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
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />
           <h3 className="temp">{Math.round(weather.temperature)}<small> ºC / ºF</small></h3>
           <h3 className="description">{weather.description}</h3>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels : {Math.round(weather.feels_like)}ºC</li>
              <li>Max : {Math.round(weather.max)}ºC</li>
              <li>Min : {Math.round(weather.min)}ºC</li>
              <li>Humidity : {weather.humidity}%</li>
              <li>Wind : {Math.round(weather.wind)}Km/h</li>
            </ul>
            </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <br></br>
        <br></br>
        <h2 className="sentence">
          "Dear Weather, 
        </h2>
        
        <h3 className="sentence">Stop showind off. We get it, you're hot"</h3>
      </div>
      );
  }
}
