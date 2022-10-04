import "./App.css";
import Time from "./components/time";
import { FaMapMarkerAlt } from "react-icons/fa";
import CurrentWeather from "./components/current-weather";
import NewsBox from "./components/news-component/news-box";

function App() {
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
        <NewsBox/>
      </div>
    </div>
  );
}

export default App;
