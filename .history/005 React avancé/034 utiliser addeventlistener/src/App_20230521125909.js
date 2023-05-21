import { useState, useEffect, useRef } from "react";
import "./App.css";
import Video from "./Video.mp4";

function App() {
  const [toggle, setToggle] = useState(true);

  const ref = useRef([]);

  useEffect(() => {
     
    window.addEventListener('resize', actionResize);

    function actionResize(){
      console.log("Resized !!!!");//S affichera lorsque l on redimensionne la fenetre window donc la vidéo
    }

    return () => {//Sera executé lorsque le composant sera détruit
      window.removeEventListener('resize', actionResize)
    }//est utilisée pour supprimer un gestionnaire d'événement qui a été précédemment enregistré.

Dans cet exemple spécifique, elle supprime la fonction actionResize qui a été précédemment ajoutée comme un gestionnaire d'événement pour l'événement 'resize' de l'objet window.

L'événement 'resize' se déclenche chaque fois que la fenêtre du navigateur est redimensionnée. Si vous n'enlevez pas cet événement lorsque le composant est démonté, cela pourrait causer des fuites de mémoire, car la fonction actionResize continuerait à s'exécuter en arrière-plan même si le composant n'est plus présent dans le DOM.

C'est pourquoi cette ligne est souvent utilisée dans la fonction de nettoyage retournée par useEffect. Cette fonction est exécutée avant que le composant ne soit démonté, ce qui donne l'opportunité de nettoyer tout ce qui a été mis en place lors de l'exécution de useEffect. Dans ce cas, elle est utilisée pour supprimer le gestionnaire d'événement 'resize' pour éviter des problèmes potentiels.

  }, []);

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  const addToRef = el => {
    // console.log(el);
    if(el && !ref.current.includes(el)){
      ref.current.push(el);
    }
  }

  return (
    <div className="App">
      <video  ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>

      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>

      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;

// Ce code est un composant React appelé `App` qui affiche trois vidéos et un bouton. Il utilise les
//  hooks React `useState`, `useEffect` et `useRef`.

// Voici une explication détaillée de ce que fait chaque partie du code :

// 1. `const [toggle, setToggle] = useState(true);` : Ce code utilise le hook `useState` pour créer une
//  variable d'état `toggle` qui est initialisée à `true`. `setToggle` est la fonction qui permet de 
//  modifier la valeur de `toggle`.

// 2. `const ref = useRef([]);` : Le hook `useRef` est utilisé pour créer une référence mutable, qui 
// est initialisée comme un tableau vide.

// 3. `useEffect(() => {...}, []);` : Le hook `useEffect` permet d'effectuer des effets de bord dans 
// les composants fonctionnels. Ici, il est utilisé pour ajouter un écouteur d'événement `resize` à 
// l'objet `window` lors du premier rendu du composant. La fonction `actionResize` est déclenchée 
// chaque fois que l'événement `resize` est déclenché. Elle affiche simplement "Resized !!!!" dans la
//  console. Lorsque le composant est démonté, l'écouteur d'événement est supprimé pour éviter les
//   fuites de mémoire.

// 4. `const toggleFunc = () => {...}` : Cette fonction inverse la valeur de `toggle` lorsqu'elle est 
// appelée.

// 5. `const addToRef = (el) => {...}` : Cette fonction ajoute l'élément `el` à la référence si `el` 
// est défini et qu'il n'est pas déjà présent dans la référence.

// 6. Dans la partie `return`, trois vidéos et un bouton sont rendus. Chaque vidéo a `addToRef` comme 
// référence, ce qui signifie que chaque élément vidéo sera ajouté à `ref.current`. Le bouton a 
// `toggleFunc` comme gestionnaire de clic, ce qui signifie que `toggleFunc` sera appelé chaque fois 
// que le bouton est cliqué.

// Notez que le bouton "Toggle" ne semble pas avoir d'effet sur les vidéos dans ce code actuellement.