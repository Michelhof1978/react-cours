import React from 'react'

function Content(props) {
    console.log("Mise à jour");
    return (
        <div className="content">
            <h1>{props.num}</h1>
        </div>
    )
}
export default React.memo(Content);

Votre composant `Content` est un composant fonctionnel qui reçoit `props` comme argument et les 
utilise pour afficher des données. Dans cet exemple, vous affichez `props.num` dans une balise 
`<h1>`.

De plus, vous utilisez `React.memo` pour envelopper votre composant `Content`. `React.memo` est une 
fonction de réacteur qui optimise votre composant en évitant les re-rendus inutiles. Si votre
 composant reçoit les mêmes `props` lors du rendu suivant, React réutilisera le rendu du dernier appel à partir de la mémoire au lieu de rendre à nouveau le composant, ce qui peut améliorer les performances, en particulier pour les composants qui se rendent fréquemment ou qui sont coûteux en termes de performance.

Enfin, vous utilisez `console.log("Mise à jour")` pour afficher un message chaque fois que le composant est rendu. Avec `React.memo`, ce message ne sera affiché que lorsque les `props` du composant changent.

Cependant, il est important de noter qu'avec le code que vous avez fourni, `props.num` sera affiché comme une liste d'éléments séparés par des virgules (par exemple "1,2,3,4") car il est passé comme un tableau. Si vous voulez afficher ces éléments d'une manière différente, vous devrez changer la manière dont vous les affichez dans le composant `Content`.