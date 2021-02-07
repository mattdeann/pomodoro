import React from "react"
import './Timer.css'

function LongBreakTimer({longTime, handleClick, increment, decrement}) {
  return (
    <div className="timer">
      <h1 className="timer-type">
        Long Break
      </h1>
      <section className="count-area">
        <article onClick={decrement} className="decrement">
          -
        </article>
        <h1 className="duration">{longTime}</h1>
        <article onClick={increment} className="increment">
          +
        </article>
      </section>
      <article onClick={() => handleClick("longTime")} className="start-button">
        Start
      </article>
    </div>
  )
}

export default LongBreakTimer