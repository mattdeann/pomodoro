import React from "react"
import soundFile from '../assets/alert.mp3'
import "./TimersBox.css"
import WorkTimer from "../Timers/WorkTimer"
import ShortBreakTimer from "../Timers/ShortBreakTimer"
import LongBreakTimer from "../Timers/LongBreakTimer"


class TimersBox extends React.Component {
  constructor() {
    super()
    this.state = {
      workTime: 1,
      shortTime: 300,
      longTime: 1200,
      canPress: "auto",
      storedTime: 0,
      tracker: []
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
    const sound = document.getElementsByClassName("times-up")[0]
    const newTime = this.state[timerType] - 1

    this.setState({
      [timerType]: newTime
    })

    if (newTime <= 0) {
      clearInterval(timer)
      const dot = `${timerType}Dot`
      this.setState((prevState) => ({
        canPress: "auto",
        [timerType]: this.state.storedTime,
        tracker: [...prevState.tracker, dot]
      }))
      sound.play()
      console.log(this.state.tracker)
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
    const seconds = time % 60
    const formattedSeconds = seconds - 10 < 0 ? `0${seconds}` : seconds

    return `${minutes.toFixed()} : ${formattedSeconds}`
  }

  // need to change background color of dot depending on what timer was clicked
  // store three values in the function (one for each color for each timer) and pass that color 

  renderDots = () => {
    const dotsArray = [<p>"workTimeDot"</p>]

    for (let i = 0; i < 6; i++) {
      console.log(this.state.tracker[i])
      return (
        this.state.tracker[i] ? <p></p> : <p></p>
      )
    }

    return dotsArray
  }

  render() {
    const formattedWork = this.formatTime(this.state.workTime)
    const formattedShort = this.formatTime(this.state.shortTime)
    const formattedLong = this.formatTime(this.state.longTime)
    const dots = this.renderDots()

    return (
      <section className="timers-box">
        <audio className="times-up">
            <source src={soundFile} type="audio/mpeg" />
        </audio>
        <article className="tracker">
          {dots}
        </article>
        <WorkTimer
          className="timer"
          workTime={formattedWork} 
          startTimer={this.startTimer} 
          increment={this.increment} 
          decrement={this.decrement} 
          canPress={this.state.canPress}
        />
        <ShortBreakTimer 
          className="timer"
          shortTime={formattedShort}
          startTimer={this.startTimer}
          increment={this.increment}
          decrement={this.decrement}
          canPress={this.state.canPress}
        />
        <LongBreakTimer 
          className="timer"
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