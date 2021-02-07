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
      workTime: 1800,
      shortTime: 300,
      longTime: 1200,
      canPress: "auto",
      storedTime: 0
    }
  }

  increment = (timerType) => {
    this.setState(prevState => ({
      [timerType]: prevState[timerType] += 60
    }))
  }

  decrement = (timerType) => {
    this.setState(prevState => ({
      [timerType]: prevState[timerType] -= 60
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
        canPress: "auto",
        [timerType]: this.state.storedTime
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

  formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    console.log(minutes)
    const seconds = time % 60
    const formattedSeconds = seconds - 10 < 0 ? `0${seconds}` : seconds

    return `${minutes.toFixed()} : ${formattedSeconds}`
  }

  render() {
    const formattedWork = this.formatTime(this.state.workTime);
    const formattedShort = this.formatTime(this.state.shortTime);
    const formattedLong = this.formatTime(this.state.longTime);

    return (
      <section className="timers-box">
        <WorkTimer 
          workTime={formattedWork} 
          startTimer={this.startTimer} 
          increment={this.increment} 
          decrement={this.decrement} 
          canPress={this.state.canPress}
        />
        <ShortBreakTimer 
          shortTime={formattedShort}
          startTimer={this.startTimer}
          increment={this.increment}
          decrement={this.decrement}
          canPress={this.state.canPress}
        />
        <LongBreakTimer 
          longTime={formattedLong}
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