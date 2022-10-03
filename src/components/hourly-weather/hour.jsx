import React from "react";
import "../modules/hourly-weather.css";
import { FaWind } from "react-icons/fa";

const Hour = () => {
  return (
    <div className="hour">
      <span className="hourly-temp">
        <span>5</span>°C
      </span>
      <span className="hourly-desc">Cloudy</span>
      <span className="hourly-wspeed">
        <FaWind></FaWind> 12km/h
      </span>
      <span className="hourly-time">12:00</span>
    </div>
  );
};

export default Hour;
