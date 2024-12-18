import { useLocation } from "react-router"

const LocationInfo = () => {

    const location = useLocation()

  return (
    <div>
        
        <h3>Informazioni sulla location</h3>
        <p>Path: {location.pathname}</p>
        <p>Search: {location.search}</p>
        <p>Hash: {location.hash}</p>
        <p>State: {JSON.stringify(location.state)}</p>
    </div>
  )
}

export default LocationInfo