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
    setLoaded(true);
    setWeather({
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
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature : {Math.round(weather.temperature)}ºC</li>
          <li>Description : {weather.description}</li>
          <li>Humidity : {weather.humidity}%</li>
          <li>Wind : {Math.round(weather.wind)}Km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <br></br>
        <br></br>
        <h2>
          "Dear Weather, 
        </h2>
        
        <h3>Stop showind off. We get it, you're hot"</h3>
      </div>
      );
  }
}
