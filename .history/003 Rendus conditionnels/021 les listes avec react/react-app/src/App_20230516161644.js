import { useState } from "react";
import Item from "./Components/Item/Item";

function App() {//Tableau qui va être appelé
  const [dataArr, setDataArr] = useState([
    {nom: "Juliette"},
    {nom: "John"},
    {nom: "Joris"}
  ]);


  return (
    <div className="App">
        {dataArr.map((item, index) => {// map va retourner un nouveau tableau 
          console.log(index);
          return <p key={index}>Nom : {item.nom}</p>//
        })}
    </div>
  );
}

export default App;

// Ce code représente un composant React qui utilise un état (`dataArr`) pour stocker un tableau 
// d'objets contenant des noms. Le composant itère ensuite sur ce tableau et affiche chaque nom dans 
// un paragraphe `<p>`.
// Voici une explication étape par étape :

// 1. Au début de la fonction `App`, `useState` est utilisé pour créer un état local appelé `dataArr`
//  avec une valeur initiale. La valeur initiale est un tableau contenant trois objets, chacun avec une 
//  propriété `nom` contenant un nom.

// 2. Dans la partie de retour (`return`) du composant, un `<div>` avec la classe CSS "App" est rendu.

// 3. À l'intérieur de ce `<div>`, `dataArr.map()` est utilisé pour itérer sur chaque élément du 
// tableau `dataArr`. La méthode `.map()` retourne un nouvel tableau avec les éléments transformés.

// 4. Pour chaque élément du tableau, une fonction de rappel est appelée. Cette fonction de rappel 
// reçoit trois arguments : `item` (l'élément en cours d'itération), `index` (l'index de l'élément) 
// et `array` (le tableau d'origine). Dans ce cas, nous n'utilisons que `item` et `index`.

// 5. À l'intérieur de la fonction de rappel, `console.log(index)` est utilisé pour afficher l'index
//  de chaque élément dans la console du navigateur.

// 6. Ensuite, un élément `<p>` est rendu pour chaque élément du tableau `dataArr`. Chaque paragraphe 
// affiche le nom de l'élément en utilisant `item.nom`. L'attribut `key={index}` est ajouté pour 
// garantir une identité unique à chaque élément de la liste.

// En résumé, lorsque le composant est rendu, il itère sur le tableau `dataArr` et affiche chaque nom 
// dans un paragraphe distinct. L'index de chaque élément est également affiché dans la console.