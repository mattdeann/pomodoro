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
      longTime: 20,
      canPress: "auto",
      storedTime: 0
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
      this.setState({
        canPress: "auto"
      })
      alert("Times Up!", 1000);
    }
  }

  startTimer = (timerType) => {
    this.setState({
      canPress: "none",
      storedTime: this.state[timerType]
    })

    let timer = setInterval(() => this.countDown(timer, timerType), 1000)
  }

  render() {
    return (
      <section className="timers-box">
        <WorkTimer 
          workTime={this.state.workTime} 
          startTimer={this.startTimer} 
          increment={this.increment} 
          decrement={this.decrement} 
          canPress={this.state.canPress}
        />
        <ShortBreakTimer 
          shortTime={this.state.shortTime}
          startTimer={this.startTimer}
          increment={this.increment}
          decrement={this.decrement}
          canPress={this.state.canPress}
        />
        <LongBreakTimer 
          longTime={this.state.longTime}
          startTimer={this.startTimer}
          increment={this.increment}
          decrement={this.decrement}
          canPress={this.state.canPress}
        />
      </section>
    )
  }
}

export default TimersBox