import "./App.css";
import Time from "./components/time";
import { FaMapMarkerAlt } from "react-icons/fa";
import CurrentWeather from "./components/current-weather";

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
        <div className="test">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt culpa explicabo qui inventore maiores dolor error possimus unde reprehenderit. Quia similique facilis inventore sequi, optio id, eos delectus provident voluptas omnis ex qui fugit accusamus animi at? Sapiente, eligendi. Officia ipsa libero aperiam quod rem impedit eligendi unde incidunt quaerat sed illum molestias quisquam possimus quo aliquam commodi excepturi facere vero enim explicabo officiis omnis blanditiis, voluptatem expedita? Magni vitae inventore autem facilis culpa voluptas blanditiis provident eum? Quaerat aliquam omnis et commodi corrupti placeat hic repellendus praesentium unde aspernatur! Libero, autem id. Nobis quia voluptatibus possimus consequatur. Voluptatum.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
