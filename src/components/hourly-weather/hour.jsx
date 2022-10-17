import React from "react";
import "../modules/hourly-weather.css";
import { FaWind } from "react-icons/fa";

const Hour = (props) => {
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
      <span className="hourly-time">
        {props.data.dt_txt.split(" ")[1].slice(0, 5)}
      </span>
    </div>
  );
};

export default Hour;
