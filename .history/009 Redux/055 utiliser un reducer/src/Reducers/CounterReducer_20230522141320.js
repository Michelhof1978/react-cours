const INITIAL_STATE = {
    count: 0
}

function CounterReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'INCR': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'DECR': {
            return {
                ...state,
                count: state.count - 1
            }
        }
    }


    return state;
}

export default CounterReducer;

This is a simple reducer function for a Redux store. Here's what's happening in this function:

1. The `INITIAL_STATE` constant is an object that defines the initial state of this slice of the Redux store. This slice has one property, `count`, initialized at `0`.

2. `CounterReducer` is a reducer function. It receives two parameters: the current `state` (with a default value of `INITIAL_STATE` if `state` is `undefined`), and the `action` that was dispatched.

3. Inside `CounterReducer`, it uses a `switch` statement to handle different types of actions. For the `INCR` action, it returns a new state object with the `count` incremented by 1. For the `DECR` action, it returns a new state object with the `count` decremented by 1. Note that it uses the spread operator (`...state`) to copy all other properties from the current state, which is a common pattern for updating state immutably.

4. If the `action.type` is not `INCR` or `DECR`, the reducer simply returns the current state unchanged.

This reducer handles the logic of updating the `count` in the Redux store when actions are dispatched. When an 'INCR' action is dispatched, the counter is incremented. When a 'DECR' action is dispatched, the counter is decremented.

Remember, in Redux, actions are plain objects that must have a `type` field, and may optionally have additional data fields. For example, you might dispatch an action like this: `{ type: 'INCR' }`.

The `CounterReducer` is then exported so it can be used to create the Redux store.