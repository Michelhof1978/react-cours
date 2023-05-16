//Ici, on affiche du contenu ou pas si c'est true ou false, on va montrer du contenu de façon conditionnel

import { useState } from "react";
import Item from "./Components/Item/Item";

function App() {
  const [toggle, setToggle] = useState(true);//création du state

  const changeState = () => {
    setToggle(!toggle);//Cela changera le true en false ou l inverse
  };

  let toggleContenu;

  if (toggle) {//Si toggle est true alors, tu me retournes: 
    toggleContenu = <h1>Le state est True</h1>;
  } else {
    toggleContenu = <h1>Le state est False</h1>;
  }


    return (
      {toggle ? //Est ce que toggle est true ? (OPERATION TERNAIRE)
      : //SINON, tu me retourn
      <div className="App">
        {toggleContenu}
        <button onClick={changeState}>Change state</button>
      </div>
      }
    );
  
}

export default App;

// Ce code représente un composant React qui utilise un état (`toggle`) pour contrôler l'affichage d'un
// contenu conditionnel et permet à l'utilisateur de changer cet état en cliquant sur un bouton.
// Voici une explication étape par étape :

// 1. Au début de la fonction `App`, `useState` est utilisé pour créer un état local appelé `toggle` avec une valeur initiale de `true`. Cela signifie que `toggle` sera le nom de la variable qui stocke l'état actuel, et `setToggle` sera la fonction utilisée pour mettre à jour cet état.
// 2. Ensuite, la fonction `changeState` est définie. Elle est appelée lorsqu'un utilisateur clique sur le bouton "Change state". Cette fonction utilise `setToggle` pour inverser la valeur de `toggle` en utilisant l'opérateur logique NOT (`!`). Ainsi, si `toggle` est `true`, il deviendra `false`, et vice versa.
// 3. Ensuite, une variable `toggleContenu` est déclarée pour stocker le contenu conditionnel à afficher en fonction de la valeur de `toggle`. Si `toggle` est `true`, la variable `toggleContenu` contiendra un élément `<h1>` avec le texte "Le state est True". Sinon, elle contiendra un élément `<h1>` avec le texte "Le state est False".
// 4. Dans la partie de retour (`return`) du composant, une expression ternaire est utilisée pour afficher le contenu conditionnel. Si `toggle` est `true`, cela rendra un élément `<div>` contenant le contenu `toggleContenu` et un bouton "Change state". Sinon, cela rendra `null` (c'est-à-dire aucun contenu).

// En résumé, lorsque le composant est rendu, il affiche le contenu conditionnel basé sur la valeur de `toggle`. L'utilisateur peut ensuite cliquer sur le bouton "Change state" pour inverser la valeur de `toggle` et mettre à jour le contenu affiché en conséquence.