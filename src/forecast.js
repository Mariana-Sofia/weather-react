import React from "react";
//import axios from "axios";

import "./forecast.css"

export default function forecast(){
    //let apiKey = "b807e5d3242a76539b823cd416c767ae";
    //let units = "metric";
    //apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=minutely,alerts&appid=${apiKey}&units=${units}`;
    //axios.get(apiUrl).then(showForecast);

    return(
        <div>
            <div className="row">
                <div className="col-3">
                    <p>date</p>
                    <ul>
                        <li>
                            data
                        </li>
                    </ul>
                    <ul>
                        <li>
                            data
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <p>date</p>
                    <ul>
                        <li>
                            data
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <p>date</p>
                    <ul>
                        <li>
                            data
                        </li>
                    </ul>
                </div>
                <div className="col-3">
                    <p>date</p>
                    <ul>
                        <li>
                            data
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}