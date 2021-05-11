import React from "react";
import WeatherIcon from "./weatherIcon";
import "./forecast.css"


export default function forecastDay(props){
    function maxTemp(){
        let temperature=Math.round(props.day.temp.max);
        return `${temperature}º`;
    }

    function minTemp(){
        let temperature=Math.round(props.day.temp.min);
        return `${temperature}º`;
    }

    function day(){
        let date= new Date(props.day.dt *1000);
        let day=date.getDay()

        let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]

        return days[day];
    }

    return (
        <div className="forecastday">
            <div className="forecast-date">{day()}</div>
            <WeatherIcon code={props.day.weather[0].icon} size={55} />
                <div>
                    <span className="forecast-max">{maxTemp()}</span>
                    <span className="forecast-min">{minTemp()}</span>
                </div>
        </div>
    )
}