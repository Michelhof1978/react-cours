const INITIAL_STATE = {
    cart: 0
}

function AddCartReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'ADDCART': {
            return {
                ...state,
                cart: action.payload
            }
        }
    }


    return state;
}

export default AddCartReducer;

Your `AddCartReducer` function currently overwrites the existing value of `cart` with the new payload when it handles the 'ADDCART' action. This means that every time a user adds something to the cart, the new quantity will replace the existing quantity, rather than adding to it. 

If you want the 'ADDCART' action to add the new quantity to the existing `cart` state, you can update your reducer function as follows:

```jsx
const INITIAL_STATE = {
    cart: 0
}

function AddCartReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'ADDCART': {
            return {
                ...state,
                cart: state.cart + Number(action.payload)
            }
        }
        default:
            return state;
    }
}

export default AddCartReducer;
```

In this updated reducer, the payload (i.e., the quantity to be added) is added to the current `cart` value when the 'ADDCART' action is dispatched.

I also added a `default` case to the switch statement, which returns the current state if the action type doesn't match any of the cases. This is a common practice in writing reducer functions to handle unexpected actions.