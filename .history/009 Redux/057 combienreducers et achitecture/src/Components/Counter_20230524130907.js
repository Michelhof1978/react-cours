import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Counter() {

    const [cartData, setCartData] = useState(0);

    const {cart, count} = useSelector(state => ({
        ...state.AddCartReducer,
        ...state.CounterReducer
    }))

    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({
            type: "INCR"
        })
    }
    const decrFunc = () => {
        dispatch({
            type: "DECR"
        })
    }

    const addToCartFunc = () => {
        dispatch({
            type: "ADDCART",
            payload: cartData
        })
    }

    return (
        <div>
            <h1>Votre panier : {cart} {count}</h1>   
            {/* <button onClick={decrFunc}>-1</button>
            <button onClick={incrFunc}>+1</button> */}
            <input 
            value={cartData}
            onInput={e => setCartData(e.target.value)}
            type="number"/>
            <br />
            <button onClick={addToCartFunc}>Ajouter au panier</button>
        </div>
    )
}

Votre code est un simple composant React utilisant des crochets et Redux pour la gestion de l'état. C'est généralement une bonne pratique d'utiliser Redux lorsque vous avez plusieurs états ou des états complexes de votre application. Décrivons ce qui se passe dans votre code:

1. `UseState (0)` Initialise une variable d'état «Cartdata» avec une valeur initiale `0».

2. `USEDELORCH 'est un crochet redux utilisé pour extraire les données de l'état du magasin Redux. Dans votre code, il est utilisé pour obtenir les états `` Cart 'et «Count» des états «addCartreducer» et «contre-réducteurs».

3. `Usedispatch` est un crochet qui renvoie une référence à la fonction« Dispatch »de la boutique Redux. Vous l'utilisez pour expédier des actions.

4. `incrfunc` et` décrfunc` sont des fonctions qui, lorsqu'elles sont appelées, envoient des actions de type `augment 'et« dimin »respectivement. Ceux-ci augmenteraient et diminueraient la valeur de comptoir dans votre état Redux.

5. `AddToCartFunc 'est une fonction qui dépasse une action de type` addcart', ainsi qu'une charge utile «Cartdata».

6. Votre composant rend une div qui affiche les valeurs actuelles «CART» et «Count», un champ de saisie pour définir la valeur `Cartdata» et un bouton qui, lorsqu'il est cliqué, répartit l'action `addcart» en utilisant `addTocartFunc`.

Notez que ce composant suppose que vous avez configuré votre magasin Redux et les réducteurs de manière appropriée pour gérer les actions `` augment ', «diminuant» et «addcart». Assurez-vous que vos réducteurs sont configurés pour gérer ces actions et mettre à jour l'état de manière appropriée. Assurez-vous également que votre magasin Redux est correctement fourni à un niveau supérieur dans votre arbre de composant à l'aide du composant «Provider» de «React-Redux».

Faites-moi savoir si vous avez d'autres questions sur ce code!