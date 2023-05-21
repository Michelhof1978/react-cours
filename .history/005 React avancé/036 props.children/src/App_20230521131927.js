import { useState, useEffect, useRef } from "react";
import "./App.css";
import Content from './Content'

function App() {
  const [toggle, setToggle] = useState("abc");

  const toggleFunc = () => {
    const newArr = [...toggle];
    newArr.push(4);

    setToggle(newArr);
  };

  console.log("mise à jour");


  return (
    <div className="App">
      <Content>
        <h1>Titre de mon article 1</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content>
      <Content>
        <h1>Titre de mon article 2</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content>
      <Content>
        <h1>Titre de mon article 3</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
La fonction `App` est un composant React qui utilise le hook `useState` pour créer un état local 
`toggle`, initialisé avec la valeur de la chaîne "abc".

La fonction `toggleFunc` est définie pour modifier cet état. Elle convertit d'abord l'état actuel en
 un tableau avec l'opérateur de décomposition (spread operator). Ensuite, elle ajoute le chiffre
  4 à ce tableau avec la méthode `push`, puis elle utilise `setToggle` pour mettre à jour l'état
   `toggle` avec ce nouveau tableau. Cependant, il y a un problème ici : vous ne pouvez pas décomposer une chaîne en un tableau puis y ajouter un chiffre. Cela causera une erreur.

Le composant `App` affiche également une série de composants `Content`, chacun contenant un titre et un paragraphe de texte. À la fin, il y a un bouton qui, lorsqu'il est cliqué, appelle la fonction `toggleFunc`.

En supposant que le composant `Content` est défini ailleurs et importé correctement, le rendu de votre application devrait afficher trois sections de contenu et un bouton.

Notez que votre code actuel va causer une erreur en raison de la façon dont vous essayez de manipuler l'état `toggle`. Si vous souhaitez convertir une chaîne en un tableau de caractères, ajouter un élément, puis le convertir à nouveau en une chaîne, vous pouvez le faire comme suit :

```jsx
const toggleFunc = () => {
  const newArr = [...toggle];
  newArr.push('4');

  setToggle(newArr.join(''));
};
```

Ceci convertira la chaîne en un tableau de caractères, ajoutera le chiffre 4 en tant que caractère, puis convertira à nouveau le tableau en une chaîne.