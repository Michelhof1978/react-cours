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


Ce code est un composant React simple utilisant les hooks et Redux pour la gestion de l'état. 

1. `useState(0)` initialise une variable d'état `cartData` avec la valeur initiale `0`.

2. `useSelector` est un hook Redux utilisé pour extraire des données de l'état du store Redux.
 Dans votre code, il est utilisé pour obtenir les valeurs `cart` et `count` à partir des états 
 `AddCartReducer` et `CounterReducer`.

3. `useDispatch` est un hook qui renvoie une référence à la fonction `dispatch` du store Redux. 
Vous l'utilisez pour dispatch des actions.

4. `incrFunc` et `decrFunc` sont des fonctions qui, lorsqu'elles sont appelées, dispatch des actions
 de type `INCR` et `DECR` respectivement. Ces fonctions augmenteraient et diminueraient la valeur du
  compteur dans votre état Redux.

5. `addToCartFunc` est une fonction qui dispatche une action de type `ADDCART`, avec un payload `cartData`.

6. Votre composant renvoie une div qui affiche les valeurs actuelles de `cart` et `count`, un champ de saisie pour définir la valeur de `cartData`, et un bouton qui, lorsqu'on clique dessus, dispatche l'action `ADDCART` en utilisant `addToCartFunc`.

Notez que ce composant suppose que vous avez configuré votre store et vos reducers Redux de manière appropriée pour gérer les actions `INCR`, `DECR` et `ADDCART`. Assurez-vous que vos reducers sont configurés pour gérer ces actions et mettre à jour l'état de manière appropriée. De plus, assurez-vous que votre store Redux est correctement fourni à un niveau supérieur dans votre arborescence de composants en utilisant le composant `Provider` de `react-redux`.

