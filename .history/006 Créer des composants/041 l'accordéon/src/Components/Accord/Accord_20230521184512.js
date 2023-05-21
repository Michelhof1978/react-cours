import React, {useState, useRef, useEffect} from 'react'
import './Accord.css'
import Chevron from './chevron.svg'

export default function Accord() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    }

    const refHeight = useRef();

    useEffect(() => {
        
        setHeightEl(`${refHeight.current.scrollHeight}px`)définit l'état de `heightEl` sur la hauteur de défilement de l'élément DOM référencé. La propriété `scrollHeight` d'un élément DOM est une propriété en lecture seule qui renvoie la hauteur d'un élément en pixels, y compris le remplissage, mais pas la bordure, la barre de défilement ou la marge.

    }, [])


    return (
        <div className="accord">
            
            <div 
            onClick={toggleState}
            className="accord-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Chevron} alt="chevron down"/>
            </div>

            <div 
            ref={refHeight} 
            className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            >
                <p
                aria-hidden={toggle ? "true" : "false"}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, debitis? Aut quia tempora perspiciatis at fuga dignissimos minus, quo laborum? Nemo sunt voluptas eligendi ullam saepe odio enim suscipit aut?
                </p>
            </div>
        </div>
    )
}

// Ce composant semble être un accordéon qui se déplie et se replie en réponse à un clic utilisateur. 
// Voici une explication détaillée de son fonctionnement :

// 1. L'état initial `toggle` est défini sur `false`, ce qui signifie que l'accordéon est fermé par
//  défaut. L'état `heightEl` est défini avec une valeur initiale non définie.

// 2. La fonction `toggleState` est utilisée pour inverser l'état de `toggle` à chaque clic utilisateur,
//  ce qui ouvre et ferme l'accordéon.

// 3. La référence `refHeight` est utilisée pour accéder directement à l'élément DOM de la div qui 
// contient le contenu de l'accordéon.

// 4. `useEffect` est utilisé pour définir la hauteur de l'élément `heightEl` lors du premier rendu du
//  composant. La hauteur est définie sur la hauteur du contenu de la div (`.scrollHeight`) à laquelle
//   la référence `refHeight` est attachée.

// 5. Dans le JSX retourné par le composant, la div qui contient le contenu de l'accordéon a un style 
// qui définit sa hauteur en fonction de l'état `toggle`. Si `toggle` est vrai (l'utilisateur a cliqué
//  et l'accordéon est ouvert), la hauteur est définie sur la hauteur du contenu. Si `toggle` est faux 
//  (l'accordéon est fermé), la hauteur est définie sur `0px`.

// 6. L'attribut `aria-hidden` est utilisé pour améliorer l'accessibilité en indiquant si le contenu 
// de l'accordéon est actuellement visible ou non. 

// 7. En cliquant sur la div avec la classe 'accord-visible', la fonction `toggleState` est déclenchée,
//  ce qui inverse l'état de `toggle` et ouvre ou ferme l'accordéon.