import React from "react";
import WeatherIcon from "./weatherIcon"

import "./forecast.css"

export default function Forecast(){


    //let lon= position.coords.longitude;
    //let lat= position.coords.latitude;
    //let apiKey=`5fc1e7ef8b2560b54bb5e53c834819ac`
    //let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
   
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