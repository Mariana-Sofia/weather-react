import React, { useState } from "react";
import axios from "axios";
import Forecast from "./forecast";
import WeatherInfo from "./WeatherInfo";

import "./App.css";

 export default function Search() {
  let [city, setCity] = useState("");
  
  let [weather, setWeather] = useState({ready:false});

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemp(response) {
    console.log(response.data);

    setWeather({
      ready:true,
      coordinates: response.data.coord,
      max:response.data.main.temp_max,
      min:response.data.main.temp_min,
      feels_like: response.data.main.feels_like,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      name:response.data.name
    });
  }

  function search() {
    let apiKey = "5fc1e7ef8b2560b54bb5e53c834819ac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }

  function handleSubmit(event) {
        event.preventDefault();
        search();
    }

  function searchMyCity(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "5fc1e7ef8b2560b54bb5e53c834819ac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }

  function getCurrentCity() {
    navigator.geolocation.getCurrentPosition(searchMyCity);
  }
    

  let form = (
    <div className="weather">
      
        <form className="col-10" onSubmit={handleSubmit}>
          <input  placeholder="Enter a city"  className="form-control" autoFocus="on" onChange={updateCity} />
        </form>
      

      <div className="row">
        <div className="col-3"></div>

        <div className="col-3">
          <button type="button" className="btn btn-info form-control" placeholder="Current" onClick={getCurrentCity}>Current Location</button>
        </div>

        <div className="col-3">
          <button type="submit" className="btn btn-info form-control"  onClick={handleSubmit}>Search</button>
        </div>

        <div className="col-3"></div>
      </div>
      </div>


  );
  if (weather.ready) {
    return (
      <div>
        {form}
        <WeatherInfo data={weather}/>
        <Forecast coordinates={weather.coordinates} />
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
