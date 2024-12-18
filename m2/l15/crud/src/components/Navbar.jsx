import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/new-pizza" className="nav-link">Crea Pizza</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Navbar