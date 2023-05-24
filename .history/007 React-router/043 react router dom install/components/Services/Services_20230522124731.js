import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// //Link : Le composant Link de react-router-dom est utilisé pour créer des liens dans votre 
// application React. Il fonctionne de manière similaire à la balise <a> en HTML, mais au lieu de
//  rafraîchir la page entière comme le ferait un lien normal, le composant Link met à jour l'URL et
//   rend les nouveaux composants sans rafraîchir la page. Cela permet de créer une expérience
//    utilisateur plus fluide et plus réactive.
// Outlet : Le composant Outlet de react-router-dom est utilisé dans le contexte du routage imbriqué. 
// Il sert de placeholder pour les composants enfants qui seront rendus en fonction du chemin actuel. 
// En d'autres termes, lorsqu'une route est définie avec des sous-routes, Outlet est l'endroit où ces 
// sous-routes seront rendues.

export default function Services() {
  return (
    <div>
        <h1>Section services</h1>
        <nav>
          <link to="/services/Developpement">Développement</link>
          <link to "/services/Cybersecurity">Cyber sécurité</link>
        </nav>
        <
    </div>
  )
}
