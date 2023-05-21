import { useState, useEffect, useRef, useMemo } from "react";
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
    return [1,2,3,4]
  }, [])//Va permettre de mémoriser le tableau 1 seule fois au lieu de faire appel à la fonction à chaque fois lors du clic sur bouton, cela permettra de gagner en mémoire

  return (
    <div className="App">
      <Content num={tableau}/>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;

// Dans le code ci-dessus, vous utilisez le hook `useState` pour initialiser une variable d'état 
// `toggle` avec un tableau `[1,2,3]`.

// La fonction `toggleFunc` est utilisée pour ajouter le nombre 4 au tableau chaque fois qu'elle est
//  appelée. Elle crée d'abord une copie du tableau existant en utilisant l'opérateur de décomposition 
//  (spread operator), puis elle utilise la méthode `push` pour ajouter le nombre 4 à la copie, et 
//  enfin elle utilise `setToggle` pour mettre à jour l'état `toggle` avec le nouveau tableau.

// Ensuite, vous utilisez le hook `useMemo` pour créer une valeur qui ne sera recalculée que si ses 
// dépendances (le tableau vide `[]` dans ce cas) changent. Dans ce cas, comme les dépendances 
// ne changent jamais, `tableau` sera toujours égal à `[1,2,3,4]`.

// Dans le rendu du composant, vous passez `tableau` en tant que prop `num` au composant `Content`.

// Enfin, vous avez un bouton qui, lorsqu'il est cliqué, appelle la fonction `toggleFunc`.

// Cela signifie que chaque fois que vous cliquez sur le bouton, le nombre 4 sera ajouté à la fin de 
// l'état `toggle`. Cependant, cette action n'affecte pas directement ce qui est rendu dans l'interface
//  utilisateur, à moins que vous utilisiez également `toggle` quelque part dans votre rendu.

// Veuillez noter que dans votre code actuel, vous n'utilisez pas l'état `toggle` dans le rendu de votre
//  composant. Si vous voulez voir comment `toggle` change chaque fois que vous cliquez sur le bouton, 
//  vous pourriez envisager de l'inclure dans votre rendu.
------------------------------------------------------------------------------------------------
`useMemo` est un hook React qui peut être utilisé pour optimiser les performances de votre 
application en évitant des calculs coûteux inutiles.

`useMemo` retourne une valeur mémorisée qui est seulement recalculée lorsque certaines dépendances 
changent. Il prend deux arguments : une fonction de création et une liste de dépendances. La fonction de création est exécutée lorsque le hook est rendu pour la première fois et chaque fois que les dépendances changent. La valeur qu'elle retourne est mémorisée et renvoyée lors des rendus ultérieurs tant que les dépendances restent les mêmes.

Voici un exemple de base de son utilisation :

```jsx
import React, { useMemo } from 'react';

function Example({ a, b }) {
  const result = useMemo(() => {
    // Un calcul coûteux
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return a + b + sum;
  }, [a, b]); // Les dépendances

  return (
    <div>{result}</div>
  );
}
```

Dans cet exemple, le calcul coûteux dans `useMemo` n'est effectué que lorsque `a` ou `b` changent. Si ces props ne changent pas entre les rendus, `useMemo` renvoie simplement la valeur mémorisée au lieu d'exécuter à nouveau le calcul.

Notez que `useMemo` ne devrait être utilisé que lorsque le calcul de la valeur est vraiment coûteux. Les hooks de React ajoutent un certain coût, il est donc important de ne pas les utiliser inutilement. En général, vous devriez éviter d'optimiser prématurément votre application. Commencez par rendre votre code propre et facile à comprendre, puis optimisez seulement les parties qui sont clairement lentes après avoir profilé votre application.