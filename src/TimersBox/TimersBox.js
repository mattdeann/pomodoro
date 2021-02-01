import React from "react"
import "./TimersBox.css"
import Timer from "../Timer/Timer"


// the timers box will have three timers


function TimersBox() {
  return (
    <div className="timers-box">
      <Timer type="Work" duration="30:00"/>
      <Timer type="Short Break" duration="5:00"/>
      <Timer type="Long Break" duration="20:00"/>
    </div>
  )
}

export default TimersBox