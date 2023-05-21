import React from 'react'

export default function Content(props) {
    console.log(props);
    return (
        <div className="content">
            {props.children}//V
        </div>
    )
}

// Le composant `Content` que vous avez défini est un composant fonctionnel React qui reçoit des 
// `props` en tant que paramètre. Ces `props` peuvent être n'importe quelles propriétés que vous voulez
//  passer au composant depuis le composant parent.

// Dans votre cas, vous utilisez `props.children` dans votre rendu, ce qui est une propriété spéciale 
// en React. `props.children` fait référence à tous les éléments enfants qui sont passés au composant 
// `Content` depuis le composant parent.

// Par exemple, dans le code suivant extrait de votre composant `App` :

// ```jsx
// <Content>
//     <h1>Titre de mon article 1</h1>
//     <p>Lorem ipsum dolor sit amet.</p>
// </Content>
// ```

// `<h1>Titre de mon article 1</h1>` et `<p>Lorem ipsum dolor sit amet.</p>` sont les enfants du 
// composant `Content`. Ces éléments sont ce qui est rendu à l'intérieur de `<div className="content">`
//  dans votre composant `Content`.

// En outre, votre code utilise `console.log(props)` pour afficher dans la console les `props` reçus
//  par le composant. Dans ce cas, `props` comprendrait un objet avec une clé `children` contenant les
//   éléments enfants passés au composant.

// En somme, ce composant `Content` est un composant conteneur très simple qui rend tout ce qui lui est
//  passé en tant qu'enfants.