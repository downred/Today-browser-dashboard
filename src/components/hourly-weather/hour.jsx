import React from "react";
import "../modules/hourly-weather.css";
import { FaWind } from "react-icons/fa";

const Hour = (props) => {
  console.log(props.data);
  return (
    <div className="hour">
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        className="w-icon"
      />
      <span className="hourly-temp">
        <span>{Math.round(props.data.main.temp)}</span>°C
      </span>
      <span className="hourly-desc">{props.data.weather[0].main}</span>
      <span className="hourly-wspeed">
        <FaWind></FaWind> {Math.round(props.data.wind.speed)}km/h
      </span>
      <span className="hourly-time">12:00</span>
    </div>
  );
};

export default Hour;
