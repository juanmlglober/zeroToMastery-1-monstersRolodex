import { Component } from "react"

import logo from "./logo.svg"
import "./App.css"
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Juan",
      company: "ZTM"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}, I work at Globant</p>
          <button
            onClick={() =>
              this.setState({name: "Ignacio"}, ()=>console.log(this.state))
            }
          >
            Change name
          </button>
        </header>
      </div>
    )
  }
}

export default App
