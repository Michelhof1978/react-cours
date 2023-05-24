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

Ce composant est une fonction nommée `Counter` utilisant Redux pour gérer l'état.

1. `useState(0)`: C'est un hook de React qui initialise `cartData` à `0`. `cartData` est un état local du composant.

2. `useSelector`: C'est un hook de Redux utilisé pour accéder à l'état du store Redux. Ici, il extrait les états `cart` et `count` du `state`.

3. `useDispatch`: C'est un autre hook de Redux qui renvoie la fonction `dispatch`, qui est utilisée pour envoyer des actions au store Redux.

4. `incrFunc` et `decrFunc`: Ce sont deux fonctions qui envoient (ou dispatchent) des actions de type `INCR` et `DECR` respectivement au store Redux.

5. `addToCartFunc`: Cette fonction envoie une action de type `ADDCART` au store Redux avec `cartData` comme payload.

6. Enfin, le composant retourne un élément JSX qui contient un titre affichant les valeurs actuelles de `cart` et `count`, un champ de saisie pour changer la valeur de `cartData`, et un bouton qui, lorsqu'il est cliqué, envoie une action `ADDCART` au store Redux.

C'est une application très simple de Redux avec React, qui montre comment envoyer des actions au store et comment accéder à l'état du store. Cependant, veuillez noter que ce code ne fonctionnera que si vous avez correctement configuré votre store Redux et défini des reducers pour gérer les actions `INCR`, `DECR` et `ADDCART`.