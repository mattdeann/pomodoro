import React from "react"
import "./TimersBox.css"
import WorkTimer from "../Timers/WorkTimer"
import ShortBreakTimer from "../Timers/ShortBreakTimer"
import LongBreakTimer from "../Timers/LongBreakTimer"


// the timers box will have three timers


class TimersBox extends React.Component {
  constructor() {
    super()
    this.state = {
      workTime: 3,
      shortTime: 5,
      longTime: 20
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

  countDown = (timer, timerType) => {
    const newTime = this.state[timerType] - 1

    this.setState({
      [timerType]: newTime
    })

    if (newTime <= 0) {
      clearInterval(timer)
    }
  }

  handleClick = (timerType) => {
    
    let timer = setInterval(() => this.countDown(timer, timerType), 1000)
  }

  render() {
    return (
      <section className="timers-box">
        <WorkTimer 
          workTime={this.state.workTime} 
          handleClick={this.handleClick} 
          increment={this.increment} 
          decrement={this.decrement} 

        />
        <ShortBreakTimer 
          shortTime={this.state.shortTime}
          handleClick={this.handleClick}
          increment={this.increment}
          decrement={this.decrement}
        />
        <LongBreakTimer 
          longTime={this.state.longTime}
          handleClick={this.handleClick}
          increment={this.increment}
          decrement={this.decrement}
        />
      </section>
    )
  }
}

export default TimersBox