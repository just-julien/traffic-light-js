import { Component } from "react";

export class ClassTrafficLight extends Component {

  state = {
    currentState: 0,
  };

  states = ["red", "yellow", "green"];

  nextState = () => {
    this.setState((prevState) => ({
      currentState: (prevState.currentState + 1) % this.states.length,
    }));
  };

  render() {
    const { currentState } = this.state;
    const currentColor = this.states[currentState];

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${currentColor === "red" ? "red" : "black"}`}></div>
          <div className={`circle ${currentColor === "yellow" ? "yellow" : "black"}`}></div>
          <div className={`circle ${currentColor === "green" ? "green" : "black"}`}></div>
        </div>
        <button className="next-state-button" onClick={this.nextState}>Next State</button>
      </div>
    );
  }
}
