import React from "react";

export default function TodayInfo(props){
    return(
        <ul>
              <li>Feels : {Math.round(props.feels)}ºC</li>
              <li>Max : {Math.round(props.max)}ºC</li>
              <li>Min : {Math.round(props.min)}ºC</li>
              <li>Humidity : {props.humidity}%</li>
              <li>Wind : {Math.round(props.wind)}Km/h</li>
            </ul>
    )
}