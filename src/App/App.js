import React from "react"
import "./App.css"
import TimersBox from "../TimersBox/TimersBox"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="app">
        <h1>PomodoRobot</h1>
        <TimersBox />
      </div>
    )
  }
}

export default App