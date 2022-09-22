import "./App.css";
import Time from "./components/time";
import { FaMapMarkerAlt } from "react-icons/fa";

function App() {
  return (
    <div className="App bg">
      <div className="time-wrapper">
        <Time className="time" />
        <h4 className="location">
          <span>
            <FaMapMarkerAlt /> Fushe Kosove, Kosovo
          </span>
        </h4>
      </div>
    </div>
  );
}

export default App;
