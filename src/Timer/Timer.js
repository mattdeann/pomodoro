// when the start is clicked, the timer will be started and 
// the + - buttons will be disabled
// the start button will change to a reset and you can then pick a different timer
// if the timer equals 0, play a sound

import React from "react"
import './Timer.css'

class Timer extends React.Component {
  constructor(props) {
    super()
    this.state = {
      type: props.type,
      duration: props.duration
    }
  }

  handleClick() {
    //

  }

  render() {
    return (
      <div className="timer">
        <h1 className="timer-type">{this.state.type} Timer</h1>
        <h1 className="duration">{this.state.duration}</h1>
        <button onClick={this.handleClick()} className="start-button">Start</button>
      </div>
    )
  }
}

export default Timer