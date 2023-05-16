import { useState } from "react";
import Item from "./Components/Item/Item";

function App() {
  const [toggle, setToggle] = useState(false);

  const changeState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      {toggle && <h1>Le state est True</h1>}
      <button onClick={changeState}>Change state</button>
    </div>
  );
}

export default App;

Ce code représente un composant React qui utilise un état (`toggle`) pour contrôler l'affichage
 conditionnel d'un élément `<h1>` et permet à l'utilisateur de changer cet état en cliquant sur un bouton.
Voici une explication étape par étape :

1. Au début de la fonction `App`, `useState` est utilisé pour créer un état local appelé `toggle` avec une valeur initiale de `false`. Cela signifie que `toggle` sera le nom de la variable qui stocke l'état actuel, et `setToggle` sera la fonction utilisée pour mettre à jour cet état.
2. Ensuite, la fonction `changeState` est définie. Elle est appelée lorsqu'un utilisateur clique sur le bouton "Change state". Cette fonction utilise `setToggle` pour inverser la valeur de `toggle` en utilisant l'opérateur logique NOT (`!`). Ainsi, si `toggle` est `false`, il deviendra `true`, et vice versa.
3. Dans la partie de retour (`return`) du composant, un élément `<div>` avec la classe CSS "App" est rendu. À l'intérieur de ce `<div>`, il y a une expression conditionnelle `{toggle && <h1>Le state est True</h1>}`. Cela signifie que si `toggle` est `true`, alors l'élément `<h1>` avec le texte "Le state est True" sera rendu. Sinon, si `toggle` est `false`, rien ne sera rendu à cet emplacement.

4. À la suite de cela, il y a un bouton avec le texte "Change state". Lorsque l'utilisateur clique sur ce bouton, la fonction `changeState` est appelée, ce qui entraîne la mise à jour de l'état `toggle`.

En résumé, lorsque le composant est rendu, il affiche conditionnellement l'élément `<h1>` "Le state est True" en fonction de la valeur de `toggle`. L'utilisateur peut cliquer sur le bouton "Change state" pour inverser la valeur de `toggle` et afficher ou masquer le contenu conditionnel.