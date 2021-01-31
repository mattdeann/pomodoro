import React from "react"
import "./TimersBox.css"
import Timer from "../Timer/Timer"


// the timers box will have three timers


function TimersBox() {
  return (
    <div className="timers-box">
      <Timer />
      <Timer />
      <Timer />
    </div>
  )
}

export default TimersBox