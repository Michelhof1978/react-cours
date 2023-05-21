import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import React from 'react'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Se trouve généralement dans le fichier `index.js` d'une application React et constitue le point 
d'entrée de l'application. Il est responsable du rendu de votre composant "App" de niveau supérieur
 dans le DOM. Décomposons les composants de cet appel de fonction :
 ReactDOM.render()` : il s'agit d'une fonction fournie par React qui est utilisée pour restituer les
  composants React au DOM. Il prend deux arguments : le composant React que vous souhaitez rendre et l'élément DOM dans lequel vous souhaitez rendre le composant.

 - `<React.StrictMode>` : il s'agit d'un composant wrapper qui vérifie les problèmes potentiels dans l'application pendant le développement. Cela n'a pas d'impact sur les builds de production. C'est une bonne pratique de l'utiliser, même si ce n'est pas obligatoire.
 
 - `<App />` : il s'agit de votre composant React de niveau supérieur. Dans la plupart des cas, ce composant sera responsable du rendu du reste de votre application.
 
 - `document.getElementById('root')` : il s'agit d'une méthode JavaScript vanille qui récupère l'élément DOM avec l'ID de 'root'. C'est l'élément dans lequel votre application React sera insérée. Par convention, les applications React sont généralement insérées dans un `div` avec l'ID de 'root', mais l'ID peut être tout ce que vous voulez.
 
 Dans l'ensemble, ce code rend votre composant `App` dans la `racine' `div` de votre code HTML, dans un composant `React.StrictMode` pour aider à détecter les problèmes potentiels lors du développement.

