import React from "react";

import "./App.css";

export default function WeatherTemperature(props){
        return(
            <div className="WeatherTemperature">
                <span className="temp-today">{Math.round(props.celsius)}
                     
                </span><span className="unit">ºC </span>
            </div>
        )
}