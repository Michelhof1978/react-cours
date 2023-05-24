const INITIAL_STATE = {
    count: 50
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

1. Vous définissez un objet `INITIAL_STATE` avec une propriété `count` initialisée à `50`. C'est l'état initial de la partie du store Redux que `CounterReducer` va gérer.

2. Vous définissez ensuite la fonction `CounterReducer` avec deux paramètres : `state` et `action`. `state` est l'état actuel (qui est `INITIAL_STATE` par défaut si aucun état n'est passé), et `action` est l'objet envoyé depuis votre composant ou ailleurs dans votre application.

3. À l'intérieur de `CounterReducer`, vous avez une instruction switch qui vérifie `action.type` :

   - Si `action.type` est `INCR`, la fonction retourne un nouvel état où `count` est incrémenté de 1.
   
   - Si `action.type` est `DECR`, la fonction retourne un nouvel état où `count` est décrémenté de 1.

4. Si `action.type` ne correspond à aucun des cas dans l'instruction switch, la fonction retourne l'état actuel sans le modifier. C'est une pratique courante dans les reducers Redux pour s'assurer qu'une action qui n'est pas pertinente pour ce reducer n'entraîne pas de modifications de l'état.

5. Enfin, `CounterReducer` est exporté pour être utilisé lors de la création du store Redux.

Dans votre store Redux, le `count` augmentera ou diminuera de 1 chaque fois qu'une action `INCR` ou `DECR` est dispatchée, respectivement. Tous les autres types d'actions seront ignorés par ce reducer.

N'oubliez pas de suivre un modèle similaire lors de la création de votre `AddCartReducer` pour gérer l'action `ADDCART`. Chaque reducer doit retourner un nouvel état en fonction de l'action qu'il reçoit.
