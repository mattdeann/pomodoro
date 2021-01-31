// each timer will display a time (minutes and seconds), 
// a plus and minus sign that updates the time, 
// and a start button 
// when the start is clicked, the timer will be started and 
// the + - buttons will be disabled
// the start button will change to a reset and you can then pick a different timer
// if the timer equals 0, play a sound

import React from "react"
import './Timer.css'

class Timer extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="timer">
        <h1>Timer</h1>
      </div>
    )
  }
}

export default Timer