import React from "react"
import "./TimersBox.css"
import WorkTimer from "../Timers/WorkTimer"


// the timers box will have three timers


class TimersBox extends React.Component {
  constructor() {
    super()
    this.state = {
      workTime: 5
    }
  }

  increment = () => {
    this.setState(prevState => ({
      workTime: prevState.workTime += 1
    }))
  }

  decrement = () => {
    this.setState(prevState => ({
      workTime: prevState.workTime -= 1
    }))
  }

  handleClick = () => {
    // 
  }

  render() {
    return (
      <div className="timers-box">
        <WorkTimer workTime={this.state.workTime} handleClick={this.handleClick} increment={this.increment} decrement={this.decrement} />
      </div>
    )
  }
}

export default TimersBox