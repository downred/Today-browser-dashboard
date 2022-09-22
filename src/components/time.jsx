import { useEffect, useState } from "react";
import "./modules/time.css";

const Time = () => {
  const [TimeState, setTimeState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTimeState(
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
  });

  return <div className="time">{TimeState}</div>;
};

export default Time;
