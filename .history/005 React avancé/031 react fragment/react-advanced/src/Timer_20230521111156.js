import {useState, useEffect} from 'react'


function Timer() {

  const [timer, setTimer] = useState(1)

  useEffect(() => {//useEffect = cicle de vie d un composant

    const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }

  }, [])


  return (//Avec return, on peut retourner qu un seul élement jsx mais ds cet élément, il peut y en avoir plusieurs, si plusieurs éléments, cela voudra dire que ça envois plusieurs return et là, il y aurait un problème
    <>
    {/* //Eviter de créer un Div qui crérera un noeud ds le Dom pour rien
    Les chevrons qui englobent les h1 sont des fragments, pas besoins d importer  */}
        <h1>{timer}</h1>
        <h1>{timer}</h1>
        <h1>{timer}</h1>
        <h1>{timer}</h1>
    </>
  );
}

export default Timer;

// Ce code est un composant React appelé `Timer` qui implémente un compteur. Chaque seconde, le compteur
//  est incrémenté de 1. Quand le composant est démonté, l'interval créé est nettoyé.

// 1. `const [timer, setTimer] = useState(1)`: Le Hook `useState` est utilisé pour créer une variable 
// d'état `timer` initialisée à 1. `setTimer` est la fonction utilisée pour modifier la valeur de 
// `timer`.

// 2. `useEffect(() => {...}, [])`: `useEffect` est un Hook React qui est utilisé pour exécuter des 
// effets de bord après chaque rendu. L'effet ici est de créer un interval qui incrémentera `timer` de
//  1 chaque seconde. Le tableau vide `[]` en second argument signifie que l'effet n'a pas de dépendances
//   et donc qu'il ne sera exécuté qu'une fois, juste après le premier rendu.

// 3. `setInterval(() => {setTimer(timer => timer + 1)}, 1000)`: Ceci crée un interval qui exécute la 
// fonction `setTimer` toutes les secondes. `setTimer` est appelée avec une fonction qui prend 
// l'ancienne valeur de `timer` et renvoie sa valeur augmentée de 1.

// 4. `return () => {clearInterval(intervalID)}`: Cette fonction est renvoyée par l'effet et sera 
// exécutée juste avant que le composant soit démonté. Elle permet de nettoyer l'interval créé 
// précédemment, évitant ainsi des erreurs et des fuites de mémoire.

// 5. `return (...)`: Cette partie du code renvoie le JSX qui sera rendu par le composant. Dans ce cas,
//  4 titres `<h1>` affichant la valeur courante de `timer` sont rendus. Notez l'utilisation de `<>` et
//   `</>` (des fragments de React), qui permettent de regrouper plusieurs éléments JSX sans ajouter de
//    noeud supplémentaire à l'arbre DOM.

// En somme, ce composant React affiche 4 fois la valeur actuelle de `timer`, et cette valeur est 
// incrémentée chaque seconde.