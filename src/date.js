import React from "react";
import './date.css';


export default function todayDate(){
    let today=new Date();

    let hour=today.getHours();
    if(hour <10){
        hour=`0${hour}`;
    }
    let minutes=today.getMinutes();
    if (minutes<10){
        minutes=`0${minutes}`;
    }

    let seconds=today.getSeconds();
    if (seconds<10){
        seconds=`0${seconds}`;
    }

    let months=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]

      let month=months[today.getMonth()];
      let weekday=days[today.getDay()];
      let day = today.getDate();
      let year = today.getFullYear();

    return(
        <div>
            <span className="todayDate">
                {weekday}, {day} of {month}, {year}
            </span>
            <span className="todayHour">
                {hour}:{minutes}:{seconds}
            </span>
        </div>
        )
}