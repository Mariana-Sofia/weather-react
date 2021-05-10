import React from "react";

import "./App.css"

export default function TodayInfo(props){
    return(
        <ul>
              <li className="city">{props.city}</li>
              <li>Feels : {Math.round(props.feels)}ºC</li>
              <li>Humidity : {props.humidity}%</li>
              <li>Wind : {Math.round(props.wind)}Km/h</li>
            </ul>
    )
}