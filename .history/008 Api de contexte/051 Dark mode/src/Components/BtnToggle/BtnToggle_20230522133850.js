import React, {useContext} from 'react'
import './BtnToggle.css'
import {ThemeContext} from '../../Context/ThemeContext'

export default function BtnToggle() {

    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <button 
        onClick={toggleTheme}
        className={theme ? "btn-toggle" : "btn-toggle dark-btn"}>
            {theme ? "LIGHT" : "DARK"}
        </button>
    )
}

Ce code est un composant bouton pour basculer entre deux thèmes. Voici comment il fonctionne :

1. `import React, {useContext} from 'react'`: Vous importez React, ainsi que l'hook `useContext` 
de la bibliothèque React.

2. `import './BtnToggle.css'`: Vous importez les styles pour ce composant.

3. `import {ThemeContext} from '../../Context/ThemeContext'`: Vous importez le `ThemeContext` que 
vous avez créé dans un autre fichier. Vous allez utiliser ce contexte pour accéder à l'état du thème et à la fonction pour basculer entre les thèmes.

4. `const {toggleTheme, theme} = useContext(ThemeContext)`: Vous utilisez l'hook `useContext` pour accéder aux valeurs passées dans le `ThemeContext`. En particulier, vous obtenez la fonction `toggleTheme` et la valeur actuelle du `theme`.

5. Dans le code JSX renvoyé par ce composant, vous créez un bouton qui, lorsqu'il est cliqué, exécute la fonction `toggleTheme`. La classe CSS du bouton et le texte qu'il affiche changent en fonction de la valeur actuelle du `theme`.

Si le `theme` est vrai (c'est-à-dire que le thème sombre est activé), le bouton aura la classe `btn-toggle dark-btn` et affichera "DARK". Si le `theme` est faux (c'est-à-dire que le thème clair est activé), le bouton aura la classe `btn-toggle` et affichera "LIGHT".