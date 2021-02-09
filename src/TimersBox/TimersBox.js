import React from "react"
import soundFile from '../assets/alert.mp3'
import "./TimersBox.css"
import WorkTimer from "../Timers/WorkTimer"
import ShortBreakTimer from "../Timers/ShortBreakTimer"
import LongBreakTimer from "../Timers/LongBreakTimer"

let timer;

class TimersBox extends React.Component {
  constructor() {
    super()
    this.state = {
      workTime: 1,
      shortTime: 1,
      longTime: 1200,
      canPress: "auto",
      storedTime: 0,
      lastTimer: null,
      isRunning: false,
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

  startTimer = (timerType) => {
    this.setState({
      canPress: "none",
      isRunning: true,
      storedTime: this.state[timerType],
      lastTimer: timerType
    })

    timer = setInterval(() => this.countDown(timerType), 1000)
  }

  stopTimer = () => {
    const sound = document.getElementsByClassName("times-up")[0]
    const dot = `${this.state.lastTimer}Dot`

    clearInterval(timer)

    if (this.state.tracker.length >= 12) {
      this.setState((prevState) => ({
        canPress: "auto",
        isRunning: false,
        [prevState.lastTimer]: this.state.storedTime,
        tracker: [dot]
      }))
    } else {
      this.setState((prevState) => ({
        canPress: "auto",
        isRunning: false,
        [prevState.lastTimer]: this.state.storedTime,
        tracker: [...prevState.tracker, dot]
      }))
    }

    this.renderDots()

    sound.play()
  }

  countDown = (timerType) => {
    const newTime = this.state[timerType] - 1

    this.setState({
      [timerType]: newTime
    })

    if (newTime <= 0) {
      this.stopTimer(timerType)
    }
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
    const dotsArray = this.state.tracker.map(item => {
      return (
        <p className={item}></p>
      )
    })
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
          className="work timer"
          workTime={formattedWork} 
          startTimer={this.startTimer} 
          increment={this.increment} 
          decrement={this.decrement} 
          canPress={this.state.canPress}
          isRunning={this.state.isRunning}
          stopTimer={this.stopTimer}
        />
        <ShortBreakTimer 
          className="short timer"
          shortTime={formattedShort}
          startTimer={this.startTimer}
          increment={this.increment}
          decrement={this.decrement}
          canPress={this.state.canPress}
          isRunning={this.state.isRunning}
          stopTimer={this.stopTimer}
        />
        <LongBreakTimer 
          className="long timer"
          longTime={formattedLong}
          startTimer={this.startTimer}
          increment={this.increment}
          decrement={this.decrement}
          canPress={this.state.canPress}
          isRunning={this.state.isRunning}
          stopTimer={this.stopTimer}
        />
      </section>
    )
  }
}

export default TimersBox