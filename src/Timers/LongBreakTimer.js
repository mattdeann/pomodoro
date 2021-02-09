import React from "react"
import './Timer.css'

function LongBreakTimer({longTime, startTimer, increment, decrement, canPress, isRunning, stopTimer}) {
  return (
    <div className="long timer">
      <h1 className="timer-type">
        Long Break
      </h1>
      <section className="count-area">
        <article style={{pointerEvents: canPress}} onClick={() => decrement("longTime")} className="decrement">
          -
        </article>
        <h1 className="duration">{longTime}</h1>
        <article style={{pointerEvents: canPress}} onClick={() => increment("longTime")} className="increment">
          +
        </article>
      </section>
      <article onClick={isRunning ? () => stopTimer("longTime") : () => startTimer("longTime")} className="start-button">
        {isRunning ? `Stop` : `Start`}
      </article>
    </div>
  )
}

export default LongBreakTimer