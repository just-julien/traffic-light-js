import { useState } from "react";

export const FunctionalTrafficLight = () => {

  const states = ["red", "yellow", "green"];
  const [currentState, setCurrentState] = useState(0);

  const nextState = () => {
    setCurrentState((prev) => (prev + 1) % states.length);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${states[currentState] === "red" ? "red" : "black"}`}></div>
        <div className={`circle ${states[currentState] === "yellow" ? "yellow" : "black"}`}></div>
        <div className={`circle ${states[currentState] === "green" ? "green" : "black"}`}></div>
      </div>
      <button className="next-state-button" onClick={nextState}>Next State</button>
    </div>
  );
};



