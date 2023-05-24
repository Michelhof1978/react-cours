import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
        {/* Va rediriger sur la page voulu grâce à  to="/" */}
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/services">Services</NavLink>
        <Link to="/contact">contact</Link>
    </nav>
  )
}
