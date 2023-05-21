//PEU UTILISE CE HOOK

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./App.css";
import Content from './Content'

function App() {
  const [toggle, setToggle] = useState([1,2,3]);

  const toggleFunc = () => {
    const newArr = [...toggle];
    newArr.push(4);

    setToggle(newArr);
  };

  const tableau = useMemo(() => {
    return toggle
  }, [])

  const foo = useCallback(() => {//On l utilise
    console.log("click");
  }, [])

  return (
    <div className="App">
      <Content> 
        <h1>Je suis un child</h1>
      </Content>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;

// Ce code définit un composant `App` qui utilise plusieurs hooks React :

// 1. **useState** : Ce hook est utilisé pour définir un état local dans le composant. Ici, vous avez 
// un état `toggle` qui est un tableau `[1,2,3]`. La fonction `setToggle` est utilisée pour modifier
//  cet état.

// 2. **useMemo** : Ce hook est utilisé pour optimiser les performances en mémorisant les valeurs 
// calculées coûteuses. Ici, vous créez un tableau `tableau` qui est une version mémorisée de `toggle`.
//  Cependant, comme vous n'avez pas inclus `toggle` dans le tableau des dépendances de `useMemo`, 
//  le tableau ne sera jamais recalculé même lorsque `toggle` change. Pour résoudre ce problème, vous
//   devriez modifier votre code pour inclure `toggle` dans le tableau des dépendances :

//    ```jsx
//    const tableau = useMemo(() => {
//      return toggle;
//    }, [toggle])
//    ```

// 3. **useCallback** : Ce hook est similaire à `useMemo`, mais il est utilisé pour mémoriser les 
// fonctions plutôt que les valeurs. Ici, vous créez une fonction `foo` qui est mémorisée et ne sera 
// pas recréée à chaque rendu du composant. Cependant, cette fonction n'est pas utilisée ailleurs dans 
// votre code.

// 4. Vous utilisez ensuite le composant `Content` que vous avez importé, et vous lui passez un titre
//  sous forme de children. Cependant, vous ne passez pas la variable `tableau` ou la fonction `foo` à
//   `Content` ou à tout autre endroit dans votre code, donc actuellement ces hooks n'ont aucun effet
//    sur votre application.

// 5. Enfin, vous avez un bouton qui, lorsqu'il est cliqué, appelle `toggleFunc` pour ajouter le nombre
//  4 à votre tableau `toggle`. Cela déclenche un nouveau rendu du composant avec la nouvelle valeur
//   de `toggle`.
--------------------------------------------------------------------------------------------------------------------
// `useCallback` est un hook fourni par React qui peut retourner une version mémorisée d'une fonction 
// callback. Il prend en entrée deux paramètres :

// 1. Une fonction à mémoriser
// 2. Un tableau de dépendances pour la fonction.

// Voici un exemple d'utilisation de `useCallback` :

// ```jsx
// import React, { useState, useCallback } from 'react';

// function Example() {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount(count => count + 1);
//   }, []);

//   return (
//     <div>
//       Count: {count}
//       <button onClick={increment}>Increase</button>
//     </div>
//   );
// }
// ```

// Dans cet exemple, la fonction `increment` est mémorisée par `useCallback`. Cela signifie que tant 
// que les dépendances de `useCallback` ne changent pas (dans ce cas, le tableau de dépendances est vide
// , donc `increment` ne changera jamais), `increment` restera la même fonction entre les rendus. 
// Ceci est utile dans les cas où vous passez la fonction callback à un composant enfant optimisé qui 
// dépend de la référence de la fonction, plutôt que sur son contenu.

// Cependant, vous devez utiliser `useCallback` avec précaution. La création d'une fonction mémorisée a
//  un coût, et si elle est utilisée de manière excessive ou incorrecte, elle peut en réalité réduire 
//  les performances de votre application plutôt que les améliorer. Comme pour `useMemo`, il est 
//  généralement recommandé d'éviter une optimisation prématurée et d'utiliser `useCallback` seulement
//   lorsque c'est nécessaire et après avoir identifié une véritable problématique de performance.
--------------------------------------------------------------------------------------------------------------------------------
Une fonction de rappel (ou callback) est une fonction qui est passée à une autre fonction en tant
 qu'argument, qui est ensuite invoquée ("appelée en retour") à l'intérieur de la fonction externe
  pour accomplir un type d'opération ou d'action. C'est un concept fondamental en JavaScript, qui 
  est un langage de programmation orienté vers les événements.

Voici un exemple simple d'une fonction de rappel :

```javascript
function saluer(nom) {
  console.log(`Bonjour, ${nom} !`);
}

function processUserInput(callback) {
  var nom = prompt('Veuillez entrer votre nom.');
  callback(nom);
}

processUserInput(saluer);
```

Dans cet exemple, `saluer` est une fonction de rappel. Nous la passons à `processUserInput` qui 
l'appelle ensuite avec l'entrée de l'utilisateur en tant qu'argument.

Les fonctions de rappel sont couramment utilisées dans les opérations asynchrones, comme les 
requêtes de réseau, les minuteries et les opérations liées aux événements dans le navigateur.
 Par exemple, avec l'API Fetch pour faire des requêtes HTTP :

```javascript
fetch('https://api.example.com/data', {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Erreur:', error));
```

Ici, nous passons trois fonctions de rappel à différentes méthodes : une à `then` pour gérer la 
réponse de la requête, une autre à `then` pour gérer les données JSON, et une à `catch` pour gérer
 les erreurs.