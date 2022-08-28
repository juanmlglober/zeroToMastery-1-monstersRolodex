import { Component } from "react"

import "./card.styles.css"

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster
    const urlImage = "https://robohash.org/"
    const urlKindImage = "?set=set2&size=341x341"
    return (
      <div className="card-container" key={id}>
        <img src={`${urlImage}${id}${urlKindImage}`} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card
