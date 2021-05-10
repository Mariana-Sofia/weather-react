import React from "react";
import WeatherIcon from "./weatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import TodayInfo from "./TodayInfo";

import "./App.css";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
        <div className="row">
          <div className="col-6">

            <WeatherIcon code={props.data.icon} size={64}/>
            <WeatherTemperature celsius={props.data.temperature}/>
           <h3 className="description">{props.data.description}</h3>
          </div>

          <div className="col-6">
            <TodayInfo 
                city={props.data.name}
                
                feels={props.data.feels_like}
                humidity={props.data.humidity}
                wind={props.data.wind}
                />
          </div>
          </div>
          </div>
          );
        }