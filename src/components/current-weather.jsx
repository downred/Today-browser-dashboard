import "./modules/current-weather.css";
import HourlyWeather from "./hourly-weather/hourly-weather";

const CurrentWeather = (props) => {
  return (
    <div className="box">
      {props.weatherData && (
        <div className="weather">
          <span className="description">
            {props.weatherData.weather[0].main}
          </span>
          <span className="temp">
            {Math.round(props.weatherData.main.temp)}°C
          </span>
          <div className="details">
            <span>Feels like</span>
            <span className="detail">
              {Math.round(props.weatherData.main.feels_like)}°C
            </span>
          </div>
          <div className="details">
            <span>Pressure</span>
            <span className="detail">{props.weatherData.main.pressure}hPa</span>
          </div>
          <div className="details">
            <span>Humidity</span>
            <span className="detail">{props.weatherData.main.humidity}%</span>
          </div>
          <div className="details">
            <span>Wind speed</span>
            <span className="detail">
              {Math.round(props.weatherData.wind.speed)}km/h
            </span>
          </div>
        </div>
      )}
      <div className="more-details">
        <HourlyWeather />
        <HourlyWeather />
        <HourlyWeather />
        <HourlyWeather />
        <HourlyWeather />
      </div>
    </div>
  );
};

export default CurrentWeather;
