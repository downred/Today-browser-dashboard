import React from "react";
import "../modules/hourly-weather.css";
import Hour from "./hour";

const HourlyWeather = (props) => {
  return (
    <div className="hourly">
      <Hour data={props.data} />
    </div>
  );
};

export default HourlyWeather;
