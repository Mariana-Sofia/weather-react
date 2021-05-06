import React from "react";
import WeatherIcon from "./weatherIcon";

import "./App.css";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
        <div className="row">
          <div className="col-6">
  
            <WeatherIcon code={props.data.icon}/>
           <h3 className="temp">{Math.round(props.data.temperature)}<small> ºC / ºF</small></h3>
           <h3 className="description">{props.data.description}</h3>
          </div>

          <div className="col-6">
            <ul>
              <li>Feels : {Math.round(props.data.feels_like)}ºC</li>
              <li>Max : {Math.round(props.data.max)}ºC</li>
              <li>Min : {Math.round(props.data.min)}ºC</li>
              <li>Humidity : {props.data.humidity}%</li>
              <li>Wind : {Math.round(props.data.wind)}Km/h</li>
            </ul>
          </div>
          </div>
          </div>
          );
        }