import "./card.styles.css"

const urlImage = "https://robohash.org/"
const urlKindImage = "?set=set2&size=341x341"

const Card = ({ monster: { id, name, email } }) => (
  <div className="card-container" key={id}>
    <img src={`${urlImage}${id}${urlKindImage}`} alt={`monster ${name}`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
)

export default Card
