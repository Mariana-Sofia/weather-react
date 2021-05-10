import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
    const codeMapping={
        "01d": "CLEAR_DAY", //clear sky
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY", //few clouds
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY", //scattered clouds
        "03n": "PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY", //broken clouds
        "04n": "CLOUDY",
        "09d": "RAIN", //shower rain
        "09n": "RAIN",
        "10d": "RAIN", //rain
        "10n": "RAIN",
        "11d": "RAIN", //thunderstorm
        "11n": "RAIN",
        "13d": "SNOW", //snow
        "13n": "SNOW",
        "50d": "FOG", //mist
        "50n": "FOG"
        };

    return(
        <div>
           <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color= "#fff"
            size={props.size}
            animate={true}
            />
        </div>
    );
}