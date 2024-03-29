import React, {useState, useEffect} from "react";
import ForecastDay from "./forecastDay.js"
import "./forecast.css"
import axios from "axios";

export default function Forecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast,setForecast]=useState(null);

    useEffect(() => {
        setLoaded(false)
    },[props.coordinates]);

    function handleResponse(response){
        console.log(response.data.daily);
        setForecast(response.data.daily);
        setLoaded (true);
    };
        
    
    
if (loaded){
        return(
            <div className="forecast">
              <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if (index < 4){
                        return (
                            <div className="col" key={index}>
                                <ForecastDay day={dailyForecast}/>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })}
                
              </div>
            </div>
        ) 
} else {
    let apiKey=`5fc1e7ef8b2560b54bb5e53c834819ac`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
   
    axios.get(apiUrl).then(handleResponse);

    return null;
}
}