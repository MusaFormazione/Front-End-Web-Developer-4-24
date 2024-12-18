import { Link } from "react-router"

const NotFound = () => {
  return (
    <>

        <h1>Not Found</h1>

        <p>siamo spiacenti, ma la pagina richiesta non è stata trovata</p>

        <Link to={'/'} state={ {From404 : true} }>Torna alla Home</Link>

    </>
  )
}

export default NotFound