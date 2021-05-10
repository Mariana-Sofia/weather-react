import React, {useState} from "react";

import "./App.css";

export default function WeatherTemperature(props){
let [unit,setUnit] = useState("celsius");    
    function showFahr(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit==="celsius"){
        return(
            <div className="WeatherTemperature">
                <h3 className="temp">{Math.round(props.celsius)}
                    <small className="unit"> ºC  / <a href="/" onClick={showFahr} style={{ textDecoration: 'none' }}>ºF</a></small></h3>
            </div>
        )
    } else {
        let fahr =(props.celsius *9/5) + 32;
        return(
            <div className="WeatherTemperature">
                <h3 className="temp">
                    {Math.round(fahr)}
                    <small className="unit"><a href="/" onClick={showCelsius} style={{ textDecoration: 'none' }}> ºC</a>  / ºF</small></h3>
            </div>
        )
    }     
}