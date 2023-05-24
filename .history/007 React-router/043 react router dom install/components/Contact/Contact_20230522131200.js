import React from 'react'
import { useLocation } from 'react-router-dom'
// `useLocation` est un hook personnalisé provenant de la bibliothèque `react-router-dom` en React.js.
//  Un hook est une fonction qui permet d'utiliser les fonctionnalités de React dans les composants
//  fonctionnels. `useLocation` est un hook qui permet d'accéder à l'objet de l'emplacement actuel, 
//  qui contient des informations sur l'URL actuelle.
// L'objet de l'emplacement contient les propriétés suivantes :
// - `pathname` : Un string représentant le chemin de l'URL.
// - `search` : Un string représentant une chaîne de requête, y compris le caractère de début `?`.
// - `state` : L'état de l'emplacement, qui peut être n'importe quelle valeur que vous passez lors de 
// la navigation.
// - `hash` : Un string représentant un identifiant de fragment d'URL, y compris le caractère de début 
// `#`.
// Voici un exemple d'utilisation de `useLocation` :
// ```jsx
// import { useLocation } from 'react-router-dom';

// function CurrentLocation() {
//   let location = useLocation();

//   return (
//     <div>
//       <p>La localisation actuelle est {location.pathname}</p>
//       <p>La chaîne de requête est {location.search}</p>
//       <p>L'état de l'emplacement est {JSON.stringify(location.state)}</p>
//       <p>L'identifiant de fragment d'URL est {location.hash}</p>
//     </div>
//   );
// }
// ```
// Dans cet exemple, le composant `CurrentLocation` affiche différentes parties de l'URL actuelle, en 
// utilisant l'objet de l'emplacement retourné par `useLocation`.

export default function Contact() {
  const location = useLocation();
  con
  return (
    <div>
        <h1>Section Contact</h1>
    </div>
  )
}
