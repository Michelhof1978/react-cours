import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
        {/* Va rediriger sur la page voulu grâce à  to="/" */}
        <NavLink to="/" 
                style={({isActive}) => {
                    return isActive ? {color: 'primary'} : {color: 'danger'};
                } }>Accueil
                On peut aussi mettre du css ds un fichier externe , ici activeLink est le nom d une classe
                className =
        </NavLink>
        
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">contact</NavLink>
    </nav>
  )
}
