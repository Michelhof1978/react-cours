import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);//Comme c'est à false, la navbar sera caché au départ tant que l on aura pas cliqué sur le bouton
  const [largeur, setLargeur] = useState(window.innerWidth);//Prendre en compte la largeur de notre fenêtre

    const toggleNav = () => { //Au départ, c'est false,Si on clique sur bouton = true, on affiche la navbar
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
    
        const changeWidth = () => {
            setLargeur(window.innerWidth);
            la fonction setLargeur, qui est une fonction de définition d'état renvoyée par le crochet useState.

Lorsque setLargeur(window.innerWidth); est appelée, elle fixe l'état de largeur à la largeur actuelle de la fenêtre (viewport). window.innerWidth est une propriété JavaScript intégrée qui renvoie la largeur intérieure de la fenêtre en pixels.

Cet élément d'état largeur est ensuite utilisé dans le composant pour déterminer s'il faut afficher ou masquer le menu de navigation en fonction de la largeur de la fenêtre.
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }


    }, [])

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items">Accueil</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">BTN</button>
      {/* //Au départ, c'est false,Si on clique sur bouton = true, on affiche la navbar */}
    </nav>
  );
}

// Le composant `Navbar` utilise deux éléments d'état : `toggleMenu` et `largeur`. `toggleMenu` est 
// utilisé pour gérer si oui ou non le menu de navigation doit être affiché. `largeur` est utilisé 
// pour stocker la largeur actuelle de la fenêtre.

// Vous utilisez le crochet `useState` pour créer ces deux éléments d'état et le crochet `useEffect` 
// pour ajouter un écouteur d'événement pour le redimensionnement de la fenêtre.

// Dans votre crochet `useEffect`, vous ajoutez un écouteur d'événement `resize` à l'objet window. 
// Chaque fois que la taille de la fenêtre change, la fonction `changeWidth` sera appelée, mettant à 
// jour la variable d'état `largeur` avec la nouvelle largeur de la fenêtre.

// Le hook `useEffect` nettoie également l'écouteur d'événements lorsque le composant se démonte ou se 
// restitue. Ceci est fait pour éviter les fuites de mémoire et pour vous assurer que vous avez 
// toujours affaire à l'état le plus récent du composant.

// Dans l'instruction de retour JSX, vous affichez une liste d'éléments de navigation uniquement si 
// `toggleMenu` est vrai ou si `largeur` est supérieur à 500. Ensuite, vous avez un bouton qui bascule
//  l'état `toggleMenu` lorsque vous cliquez dessus, montrant efficacement ou masquer les éléments de
//   navigation.

// Ce composant semble implémenter une barre de navigation réactive, qui bascule entre une liste
//  déroulante basculante et une liste de navigation complète basée sur la largeur de la fenêtre 
//  d'affichage.