import './Card.css'
const Card = ({titolo, contenuto}) => {
  return (
    <div className="card dark-theme">
        <h3>{titolo}</h3>
        <p>{contenuto}</p>
    </div>
  )
}

export default Card