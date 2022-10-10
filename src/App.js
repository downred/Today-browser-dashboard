import "./App.css";
import Time from "./components/time";
import { FaMapMarkerAlt } from "react-icons/fa";
import CurrentWeather from "./components/current-weather";
import NewsBox from "./components/news-component/news-box";
import { useEffect } from "react";

function App() {
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
    })
  })

  return (
    <div className="App bg">
      <div className="time-wrapper">
        <Time />
        <div className="location">
          <FaMapMarkerAlt />
          <span>Fushe Kosove, Kosovo</span>
        </div>
      </div>
      <div className="pg-bottom">
        <CurrentWeather />
        <NewsBox />
      </div>
    </div>
  );
}

export default App;
