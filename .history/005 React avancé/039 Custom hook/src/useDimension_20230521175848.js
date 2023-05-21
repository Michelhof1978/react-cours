import {useState, useEffect} from 'react';


export default function useDimension(){//Va retourner soit une fonction, soit une valeur

    const [dimension, setDimension] = useState();

    useEffect(() => {

        window.addEventListener('resize', resizeFunc);// On ajoute un écouteur d'événements à l'objet
         window du navigateur. Plus précisément, il écoute l'événement 'resize'.
         L'événement 'resize' est déclenché chaque fois que la fenêtre du navigateur est 
         redimensionnée. Lorsque cet événement se produit, la fonction resizeFunc est appelée.
        En bref, cette ligne de code signifie : "Lorsque la fenêtre du navigateur est redimensionnée, exécutez la fonction resizeFunc".
        
        Dans le contexte de votre code, cela signifie que chaque fois que la fenêtre est redimensionnée, vous mettez à jour l'état dimension pour qu'il corresponde à la nouvelle largeur de la fenêtre.

        function resizeFunc(){
            setDimension(window.innerWidth)
        }
        resizeFunc();

        return () => {
            window.removeEventListener('resize', resizeFunc);
        }

    }, []);

    return dimension;
}

// C'est est un hook personnalisé en React appelé `useDimension`. Ce hook renvoie la 
// largeur actuelle de la fenêtre du navigateur. Lorsque la fenêtre est redimensionnée, il met à jour
//  cette largeur grâce à l'événement 'resize' du navigateur.

// Voici une explication détaillée de son fonctionnement :

// - Lors de l'initialisation, vous déclarez une nouvelle variable d'état `dimension` en utilisant le 
// hook `useState()`. Initialement, `dimension` est `undefined` car aucun argument initial n'est passé 
// à `useState`.

// - Ensuite, le hook `useEffect()` est utilisé pour exécuter du code lorsque le composant est monté
//  et à chaque fois qu'il est mis à jour. Ici, il ne dépend d'aucune variable (parce que le tableau 
//     de dépendances passé au deuxième argument est vide), donc il ne s'exécute qu'une seule fois 
//     après le premier rendu.

// - Dans le corps de `useEffect()`, vous ajoutez un gestionnaire d'événement 'resize' à l'objet 
// `window`. Ce gestionnaire d'événement est la fonction `resizeFunc()`, qui met à jour `dimension` 
// pour être la largeur actuelle de la fenêtre chaque fois que l'événement 'resize' se produit.

// - Enfin, `useEffect()` renvoie une fonction de nettoyage qui supprime le gestionnaire d'événement 'resize' lorsque le composant est démonté.

// - Le hook personnalisé `useDimension()` renvoie la largeur actuelle de la fenêtre.

// Très utile pour créer des interfaces utilisateur réactives qui s'adaptent à la taille de la 
// fenêtre du navigateur.