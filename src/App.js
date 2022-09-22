import "./App.css";
import Time from "./components/time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoLocationSharp } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App bg">
      <Time className="time" />
      <FontAwesomeIcon icon="IoLocationSharp" />
    </div>
  );
}

export default App;
