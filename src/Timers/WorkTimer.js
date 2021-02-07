import React from "react"
import './Timer.css'

function WorkTimer({workTime, startTimer, increment, decrement, canPress}) {
  return (
    <div className="timer">
      <h1 className="timer-type">
        Work
      </h1>
      <section className="count-area">
        <article onClick={decrement} className="decrement">
          -
        </article>
        <h1 className="duration">{workTime}</h1>
        <article onClick={increment} className="increment">
          +
        </article>
      </section>
      <article style={{pointerEvents: canPress}} onClick={() => startTimer("workTime")} className="start-button">
        Start
      </article>
    </div>
  )
}

export default WorkTimer