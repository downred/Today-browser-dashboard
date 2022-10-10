import "./App.css";
import Time from "./components/time";
import { FaMapMarkerAlt } from "react-icons/fa";
import CurrentWeather from "./components/current-weather";
import NewsBox from "./components/news-component/news-box";
import { useEffect } from "react";
import { API_ENDPOINT, WEATHER_API_KEY, NEWS_API_ENDPOINT } from "./api.js";
import { useState } from "react";
import axios from "axios";

function App() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [location, setLocation] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    const FINAL_ENDPOINT = `${API_ENDPOINT}lat=${lat}&lon=${long}&units=metric&appid=${WEATHER_API_KEY}`;

    let endpoints = [FINAL_ENDPOINT, NEWS_API_ENDPOINT];

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(
        axios.spread((...responses) => {
          setCurrentWeather(responses[0]);
          // setLocation(responses[0].data.name);
          setNewsData(responses[1]);

          console.log(responses[0].data);
          console.log(location);
          // console.log(responses[0]);
          console.log(newsData);
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  return (
    <div className="App bg">
      <div className="time-wrapper">
        <Time />
        <div className="location">
          <FaMapMarkerAlt />
          <span>location</span>
        </div>
      </div>
      <div className="pg-bottom">
        <CurrentWeather />
        <NewsBox newsData={ newsData } />
      </div>
    </div>
  );
}

export default App;
