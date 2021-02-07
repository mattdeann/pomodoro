import React from "react"
import './Timer.css'

function ShortBreakTimer({shortTime, handleClick, increment, decrement}) {
  return (
    <div className="timer">
      <h1 className="timer-type">
        Short Break
      </h1>
      <section className="count-area">
        <article onClick={decrement} className="decrement">
          -
        </article>
        <h1 className="duration">{shortTime}</h1>
        <article onClick={increment} className="increment">
          +
        </article>
      </section>
      <article onClick={() => handleClick("shortTime")} className="start-button">
        Start
      </article>
    </div>
  )
}

export default ShortBreakTimer