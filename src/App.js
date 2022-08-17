import { Component } from "react"

import "./App.css"
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users }, () => console.log(this.state))
      )
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={(event) => {
            const searchString = event.target.value.toLowerCase()
            console.log(searchString)
            const filteredMonsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(searchString))
            this.setState(()=>({monsters: filteredMonsters}))
          }}
        />
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
