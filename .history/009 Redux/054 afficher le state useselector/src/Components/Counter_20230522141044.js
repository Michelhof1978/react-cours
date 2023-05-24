import React from 'react'
import {useSelector} from 'react-redux'

export default function Counter() {

    const count = useSelector(state => state.count)

    return (
        <div>
            <h1>Les données : {count}</h1>        
        </div>
    )
}

Dans votre code, vous avez un composant React qui affiche la valeur de comptage actuelle de votre 
état Redux. Voici une explication de chaque partie:

1. `Importer React à partir de 'React' ': cette importation réagit, dont vous avez besoin pour
 créer un composant React.

2. `Import {useSelector} à partir de 'React-Redux' ': cela importe le crochet` useelector` de 
`react-redux`. Ce crochet permet de lire les données de votre composant React à partir du magasin 
Redux.

3. `Exporter la fonction default compter () {...}`: Cela définit et exporte un composant React 
fonctionnel. Dans ce cas, c'est un composant qui affiche le nombre actuel de l'état Redux.

4. `const Count = useelector (state => state.Count)`: Cette ligne utilise le crochet `useelector` 
pour lire la valeur` Count »actuelle de l'état redux. La pièce `state => state.Count` est une
 fonction sélective qui obtient l'état redux comme un argument et renvoie la propriété« Count »
 de celui-ci.

5. `Retour (...`: Cette partie définit ce que le composant «Counter» rend. Dans ce cas, il rend un
 div contenant un en-tête. L'en-tête montre le texte «Les Donnés:», suivi du nombre actuel.

Ce composant mettra à jour chaque fois que la valeur «Count» dans l'état Redux change.

Veuillez noter que `State.Count 'suppose que` Count` est directement sur l'objet Redux State.
 Si vous utilisez des «combinairs» de Redux, votre état est probablement un objet qui contient 
 différentes propriétés pour différentes tranches de l'état. Par exemple, si vous avez un état comme `{compteur: {count: 0}}`, alors votre sélecteur devrait être `state => state.counter.count` pour sélectionner correctement le nombre.