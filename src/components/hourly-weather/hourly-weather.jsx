import React from "react";
import "../modules/hourly-weather.css";
import Hour from "./hour";

const HourlyWeather = () => {
  return (
    <div className="hourly">
      <Hour/>
    </div>
  );
};

export default HourlyWeather;
