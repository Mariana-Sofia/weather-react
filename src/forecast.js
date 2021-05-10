import React from "react";
import WeatherIcon from "./weatherIcon"

import "./forecast.css"
import axios from "axios";

export default function Forecast(props){

    function handleResponse(response){
        console.log(response.data)
    };
        let apiKey=`5fc1e7ef8b2560b54bb5e53c834819ac`
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    
    
   
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