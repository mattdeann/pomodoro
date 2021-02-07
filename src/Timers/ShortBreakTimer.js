import React from "react"
import './Timer.css'

function ShortBreakTimer({shortTime, startTimer, increment, decrement, canPress}) {
  return (
    <div className="timer">
      <h1 className="timer-type">
        Short Break
      </h1>
      <section className="count-area">
        <article style={{pointerEvents: canPress}} onClick={() => decrement("shortTime")} className="decrement">
          -
        </article>
        <h1 className="duration">{shortTime}</h1>
        <article style={{pointerEvents: canPress}} onClick={() => increment("shortTime")} className="increment">
          +
        </article>
      </section>
      <article style={{pointerEvents: canPress}} onClick={() => startTimer("shortTime")} className="start-button">
        Start
      </article>
    </div>
  )
}

export default ShortBreakTimer