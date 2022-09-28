import "./modules/current-weather.css";
import { FaWind } from "react-icons/fa";

const CurrentWeather = () => {
  return (
    <div className="box">
      <div className="weather">
        <span className="description">Overcast</span>
        <span className="temp">10°C</span>
        <div className="details">
          <span>Feels like</span>
          <span className="detail">11°C</span>
        </div>
        <div className="details">
          <span>Pressure</span>
          <span className="detail">1015hPa</span>
        </div>
        <div className="details">
          <span>Humidity</span>
          <span className="detail">64%</span>
        </div>
        <div className="details">
          <span>Wind speed</span>
          <span className="detail">35km/h</span>
        </div>
      </div>
      <div className="more-details">
        <div className="hourly">
          <div className="hour">
            <span className="hourly-temp">5°C</span>
            <span className="hourly-desc">Cloudy</span>
            <span><FaWind></FaWind> 12km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
