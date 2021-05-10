import React from "react";
import WeatherIcon from "./weatherIcon"

import "./forecast.css"
import axios from "axios";

export default function Forecast(){

    function handleResponse(response){
        console.log(response.data)
    }

   function myCity(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchMyCity);
    }

    function searchMyCity(position){
        console.log(position);
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiKey=`5fc1e7ef8b2560b54bb5e53c834819ac`
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`
        axios.get(apiUrl).then(handleResponse);
    }
    
   
    return(
        <div className="forecast">
          <div className="row">
            <div className="col">
                <div className="forecast-date">today</div>
                <WeatherIcon code="01d" size={55} />
                <div>
                    <span className="forecast-max">19º</span>
                    <span className="forecast-min">10º</span>
                </div>
            </div>

           

          </div>
        </div>
    )
}