import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
        {/* Va rediriger sur la page voulu grâce à  to="/" */}
        <Link to="/">Accueil</Link>
        <Link to="/service">Services</Link>
        <Link to="/">contact</Link>
    </nav>
  )
}
