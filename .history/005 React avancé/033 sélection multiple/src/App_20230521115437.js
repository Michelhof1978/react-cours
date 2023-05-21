import { useState, useEffect, useRef } from "react";
import "./App.css";
import Video from "./Video.mp4";

function App() {
  const [toggle, setToggle] = useState(true);

  const ref = useRef([]);

  useEffect(() => {
      console.log(ref);
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
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
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

Ce code est un composant React appelé `App` qui affiche trois vidéos et un bouton. Les vidéos sont contrôlées par des références (`ref`) React.

1. `const [toggle, setToggle] = useState(true);` : Cette ligne crée une variable d'état `toggle` initialisée à `true`. `setToggle` est la fonction utilisée pour changer la valeur de `toggle`.

2. `const ref = useRef([]);` : `useRef` est un hook React qui permet de créer une référence mutable qui persiste tout au long du cycle de vie du composant. Ici, une référence est créée avec une valeur initiale de tableau vide `[]`.

3. `useEffect(() => {...}, []);` : Le hook `useEffect` est utilisé pour exécuter une fonction après chaque rendu du composant. Ici, il sert à afficher la référence dans la console après le premier rendu du composant.

4. `const addToRef = (el) => {...}` : Cette fonction ajoute l'élément `el` à la référence si `el` est défini et qu'il n'est pas déjà dans la référence.

5. Dans le rendu (`return`), trois vidéos sont créées avec `addToRef` comme référence. Ceci signifie que lorsqu'une vidéo est rendue, elle est ajoutée à `ref`. Un bouton est également rendu qui, lorsqu'il est cliqué, exécute `toggleFunc`, qui inverse la valeur de `toggle`.

Le bouton "Toggle" ne semble pas avoir d'effet sur les vidéos dans ce code tel qu'il est actuellement. Il se pourrait que vous ayez prévu de contrôler les vidéos en fonction de l'état de `toggle` et que vous ayez supprimé ou commenté ce code pour le moment. Si vous prévoyez de contrôler les vidéos en fonction de `toggle`, vous pourriez ajouter un effet supplémentaire avec `useEffect` qui dépend de `toggle` et qui met en pause ou joue les vidéos en fonction de son état.