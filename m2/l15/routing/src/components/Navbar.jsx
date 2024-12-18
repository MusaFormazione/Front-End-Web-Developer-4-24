// import React from 'react'
import { Link, NavLink } from "react-router"

const Navbar = () => {
  return (
    <header>

        <nav>
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/chi-siamo"> Chi Siamo</NavLink> |
            <NavLink to="/post/1"> Post 1</NavLink> |
            <NavLink to="/post/2"> Post 2</NavLink>
        </nav>

    </header>
  )
}

export default Navbar