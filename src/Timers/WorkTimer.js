import React from "react"
import './Timer.css'

function WorkTimer({workTime, startTimer, increment, decrement, canPress, isRunning, stopTimer}) {
  return (
    <div className="timer">
      <h1 className="timer-type">
        Work
      </h1>
      <section className="count-area">
        <article style={{pointerEvents: canPress}} onClick={() => decrement("workTime")} className="decrement">
          -
        </article>
        <h1 className="duration">{workTime}</h1>
        <article style={{pointerEvents: canPress}} onClick={() => increment("workTime")} className="increment">
          +
        </article>
      </section>
      <article onClick={isRunning ? () => stopTimer("workTime") : () => startTimer("workTime")} className="start-button">
      {isRunning ? `Stop` : `Start`}
      </article>
    </div>
  )
}

export default WorkTimer