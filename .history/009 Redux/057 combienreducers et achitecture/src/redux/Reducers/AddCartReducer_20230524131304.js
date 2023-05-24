const INITIAL_STATE = {
    cart: 60
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

This code is part of the Redux setup. It does the following:

1. Importing `createStore` and `combineReducers` from the Redux library. `createStore` is a function that generates a Redux store with your root reducer and `combineReducers` is a utility function to combine your multiple reducers into one.

2. Importing `CounterReducer` and `AddCartReducer` which are two separate reducer files. A reducer is a function that decides how to update the state in response to any action sent to the store.

3. Creating `rootReducer` using `combineReducers`. This makes it so that when an action is dispatched, `combineReducers` will delegate handling of that action to the specific reducer based on the key you defined in the `combineReducers` object. In your case, the keys are `CounterReducer` and `AddCartReducer`.

4. Using `createStore` to create the Redux store with `rootReducer` as the argument. The store is responsible for holding the application state, dispatching actions to the reducer, and allowing components to register listeners via `subscribe`.

5. Lastly, you export the `store` so it can be used in the rest of your application.

You'll need to provide this store to your application by wrapping your main app component with `Provider` from `react-redux` and passing the store as a prop. That would look something like this:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

Remember to handle the dispatched actions (`"INCR"`, `"DECR"`, `"ADDCART"`) inside your reducers (`CounterReducer`, `AddCartReducer`) appropriately. Each reducer should return a new state based on the action it receives.