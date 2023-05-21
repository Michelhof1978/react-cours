//AFFICHAGE VIDEO AVEC REACT 

import { useState, useEffect, useRef } from "react";
import "./App.css";
import Video from "./Video.mp4";

function App() {
  const [toggle, setToggle] = useState(true);

  const ref = useRef([]);//useRef = retourne un object séléctionné

  // console.log(ref);

  useEffect(() => {
    console.log(ref.current);
    setTimeout(() => {
      ref.current.pause();
    }, 3000);
  }, []);

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  const addToRef = (el) => {
    console.log(el);
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <div className="App">
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
        {/* Pas besoins de mettre la source, React va détécter la vidéo automatiquement/ Si on ne mets pas muted, autoplay ne fonctionnera pas */}
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

Ce code est un exemple de composant React appelé `App` qui affiche trois vidéos et un bouton.
 Les vidéos sont contrôlées par des références (`ref`) React et un hook `useEffect`. 

1. `const [toggle, setToggle] = useState(true);` : Cette ligne crée une variable d'état `toggle` 
initialisée à `true`. `setToggle` est la fonction utilisée pour changer la valeur de `toggle`.

2. `const ref = useRef([]);` : `useRef` est un hook React qui permet de créer une référence mutable
 qui persiste tout au long du cycle de vie du composant. Ici, une référence est créée avec une valeur
  initiale de tableau vide `[]`.

3. `useEffect(() => {...}, []);` : Le hook `useEffect` exécute un effet de bord après chaque rendu.
 Dans cet effet, un `console.log` affiche la référence actuelle, puis un délai (`setTimeout`) est 
 défini pour mettre en pause la vidéo après 3 secondes.

4. `const addToRef = (el) => {...}` : Cette fonction ajoute l'élément `el` à la référence si `el` 
est défini et qu'il n'est pas déjà dans la référence.

5. Dans le rendu (`return`), trois vidéos sont créées avec `addToRef` comme référence. Ceci signifie que lorsqu'une vidéo est rendue, elle est ajoutée à `ref`. Un bouton est également rendu qui, lorsqu'il est cliqué, exécute `toggleFunc`, qui inverse la valeur de `toggle`.

Le code utilise des références pour stocker les éléments vidéo dans un tableau, puis utilise `useEffect` pour accéder à ces éléments vidéo et les contrôler, en mettant en pause chaque vidéo après un délai de 3 secondes. Le bouton "Toggle" ne semble pas avoir d'effet sur les vidéos dans ce code tel qu'il est actuellement.