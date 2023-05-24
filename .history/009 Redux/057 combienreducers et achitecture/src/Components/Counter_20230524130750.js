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

Your code is a simple React component using hooks and Redux for state management. It's generally a good practice to use Redux when you have multiple states or complex states in your app. Let's describe what's happening in your code:

1. `useState(0)` initializes a state variable `cartData` with initial value `0`.

2. `useSelector` is a Redux hook used to extract data from the Redux store state. In your code, it is used to get the `cart` and `count` from the `AddCartReducer` and `CounterReducer` states.

3. `useDispatch` is a hook that returns a reference to the `dispatch` function from the Redux store. You use this to dispatch actions.

4. `incrFunc` and `decrFunc` are functions that, when called, dispatch actions of type `INCR` and `DECR` respectively. These would increase and decrease the counter value in your Redux state.

5. `addToCartFunc` is a function that dispatches an action of type `ADDCART`, along with a payload `cartData`.

6. Your component renders a div which displays the current `cart` and `count` values, an input field to set `cartData` value, and a button that, when clicked, dispatches the `ADDCART` action using `addToCartFunc`.

Do note that this component assumes you have set up your Redux store and reducers appropriately to handle the `INCR`, `DECR` and `ADDCART` actions. Make sure that your reducers are set up to handle these actions and update the state appropriately. Also, ensure that your Redux store is properly provided at a higher level in your component tree using the `Provider` component from `react-redux`. 

Let me know if you have any other questions about this code!