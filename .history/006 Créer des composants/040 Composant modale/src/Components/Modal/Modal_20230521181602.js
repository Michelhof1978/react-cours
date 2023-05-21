import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="overlay">
    Dans le contexte de votre code, la `<div>` avec la classe `overlay` est utilisée pour créer une
       sorte de fond semi-transparent qui s'étend sur toute la page lorsqu'une fenêtre modale est
        ouverte. C'est une technique couramment utilisée pour attirer l'attention sur le contenu de 
 la fenêtre modale et pour indiquer que les éléments en dehors de la fenêtre modale sont
 temporairement indisponibles pendant que la fenêtre modale est ouverte.
 Généralement, dans votre fichier CSS, vous auriez quelque chose comme :
        
        ```css
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        ```
        Cela signifie que le `overlay` couvrira tout l'écran et aura un fond semi-transparent 
        (dans ce cas, un noir à 50% d'opacité). Il utilise également Flexbox pour centrer la fenêtre modale (`modal`) à l'intérieur de lui-même.
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modale</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis totam aut saepe quidem dolorum placeat velit fugit sed
                aperiam. Doloribus impedit repudiandae saepe commodi corrupti
                nobis id odit expedita quia! Quaerat magnam similique
                repudiandae accusamus tempora aliquid molestias minima nobis a
                aut ab magni ut saepe quis recusandae, reiciendis aperiam!
              </p>
              <button onClick={toggleModal} className="close-modal">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Votre code définit un composant React `Modal`, qui affiche un bouton et, lorsqu'on clique sur ce
//  bouton, un texte dans une fenêtre modale. Voici une explication plus détaillée :

// - `useState(false)`: Utilise le Hook d'état `useState` de React pour créer une variable d'état 
// `modal`, qui détermine si la fenêtre modale doit être affichée (`true`) ou non (`false`). 
// Initialement, `modal` est `false`, donc la fenêtre modale n'est pas affichée.

// - `toggleModal`: Une fonction qui inverse la valeur de `modal` lorsque vous cliquez sur le bouton. 
// Si `modal` est `false`, il devient `true` et vice versa.

// - `return (...)`: Cette partie est le JSX que le composant renvoie. Il contient un bouton avec le
//  texte "Open". Lorsque vous cliquez sur ce bouton, la fonction `toggleModal` est appelée, ce qui 
//  inverse la valeur de `modal`.

// - `{modal && (...)}:` C'est une expression JavaScript qui affiche la fenêtre modale si `modal` est 
// `true`. L'opérateur `&&` est utilisé ici pour une condition : si `modal` est `true`, alors le JSX 
// entre les parenthèses sera rendu (la fenêtre modale).

// - `onClick={toggleModal}`: C'est un gestionnaire d'événements qui appelle la fonction `toggleModal` lorsque vous cliquez sur le bouton "Open" ou "CLOSE".

// Dans l'ensemble, ce composant affiche un bouton "Open" qui, lorsqu'il est cliqué, ouvre une fenêtre
//  modale avec un texte. Vous pouvez fermer la fenêtre modale en cliquant sur le bouton "CLOSE".