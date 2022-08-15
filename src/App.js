import { Component } from "react"

import "./App.css"
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "hjabsdh123jabsdk"
        },
        {
          name: "Frank",
          id: "hsdh123jabsdk"
        },
        {
          name: "Jacky",
          id: "hjabk1j23bsdk"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default App
