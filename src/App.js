import "./App.css";
import Time from "./components/time";
import { FaMapMarkerAlt } from "react-icons/fa";
import CurrentWeather from "./components/current-weather";
import NewsBox from "./components/news-component/news-box";
import { useEffect } from "react";
import {
  API_ENDPOINT,
  WEATHER_API_KEY,
  NEWS_API_ENDPOINT,
  FORECAST_API_ENDPOINT,
} from "./api.js";
import { useState } from "react";
import Loading from "./components/loading";
import axios from "axios";

function App() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [bg, setBg] = useState(
    `https://yt3.ggpht.com/UgLHVJF0BRvC0-UGYHipHjxEmTs5GIKT2y16niUWe78S7JjGx1YZvxNYMUqPiIUKbRE3u3BaUQ=s900-c-k-c0x00ffffff-no-rj`
  );
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const FINAL_ENDPOINT = `${API_ENDPOINT}lat=${lat}&lon=${long}&units=metric&appid=${WEATHER_API_KEY}`;
  const FINAL_FORECAST_ENDPOINT = `${FORECAST_API_ENDPOINT}lat=${lat}&lon=${long}&units=metric&appid=${WEATHER_API_KEY}`;
  let endpoints = [FINAL_ENDPOINT, NEWS_API_ENDPOINT, FINAL_FORECAST_ENDPOINT];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    async function fetchData() {
      const newsRequest = await axios.get(NEWS_API_ENDPOINT);
      const weatherRequest = await axios.get(FINAL_ENDPOINT);
      const forecastRequest = await axios.get(FINAL_FORECAST_ENDPOINT);
      setNewsData(newsRequest.data.data);
      setCurrentWeather(weatherRequest.data);
      setForecast(forecastRequest.data.list.slice(5,10));
      setBg(`./weather-images/${weatherRequest.data.weather[0].icon}.jpg`);
      console.log(newsRequest.data.data);
      console.log(weatherRequest.data);
    }

    fetchData();
  }, endpoints);

  console.log(forecast)

  return (
    <div className="App bg">
      <div className="time-wrapper">
        <Time />
        {currentWeather && (
          <div className="location">
            <FaMapMarkerAlt />
            <span>
              {currentWeather.name}, {currentWeather.sys.country}
            </span>
          </div>
        )}
      </div>
      <div className="pg-bottom">
        {currentWeather ? (
          <CurrentWeather
            weatherData={currentWeather}
            forecastData={forecast}
          />
        ) : (
          <Loading />
        )}
        {newsData[0] ? <NewsBox newsData={newsData} /> : <Loading />}
      </div>
    </div>
  );
}

export default App;
