import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
        {/* Va rediriger sur la page voulu grâce à  to="/" */}
        <Link to="/">Accueil</Link>
        <Link to="/">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">contact</Link>
    </nav>
  )
}