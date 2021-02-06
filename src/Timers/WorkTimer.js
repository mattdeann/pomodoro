import React from "react"
import './Timer.css'

function WorkTimer({workTime, handleClick, increment, decrement}) {
  return (
    <div className="timer">
      <h1 className="timer-type">
        Work
      </h1>
      <button onClick={decrement} className="decrement">
        -
      </button>
      <h1 className="duration">{workTime}</h1>
      <button onClick={increment} className="increment">
        +
      </button>
      <button onClick={handleClick} className="start-button">
        Start
      </button>
    </div>
  )
}

export default WorkTimer