import React from "react"
import './Timer.css'

function LongBreakTimer({longTime, startTimer, increment, decrement, canPress}) {
  return (
    <div className="timer">
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
      <article style={{pointerEvents: canPress}} onClick={() => startTimer("longTime")} className="start-button">
        Start
      </article>
    </div>
  )
}

export default LongBreakTimer