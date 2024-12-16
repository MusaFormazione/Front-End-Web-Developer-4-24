const Card = ({gusto, prezzo, onDelete}) => {
    
    const handleDelete = () => {
        onDelete()
    }
    
  return (
    <div className="card">
          <div className="card-body">
            <h5 className="card-title">{gusto}</h5>
            <p className="card-text">{prezzo}€</p>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
          </div>
    </div>
  )
}

export default Card