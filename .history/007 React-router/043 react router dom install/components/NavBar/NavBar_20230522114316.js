import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
        
        <Link to="/">Accueil</Link>
        <Link to="/">Services</Link>
        <Link to="/">contact</Link>
    </nav>
  )
}
