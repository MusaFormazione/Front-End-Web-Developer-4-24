const Card = ({title, body, className = ''}) => {

    const classes = `card ${className}`

    return (
        <div className={classes} >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
            </div>
        </div>
    )
}

export default Card