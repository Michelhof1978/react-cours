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



1. Vous définissez un objet `INITIAL_STATE` avec une propriété `cart` initialisée à `60`. Ceci sera l'état initial de la partie du magasin Redux dont `AddCartReducer` est responsable.

2. La fonction `AddCartReducer` est définie avec deux paramètres : `state` et `action`. `state` est l'état actuel (qui par défaut est `INITIAL_STATE` si aucun état n'est passé) et `action` est l'objet qui est dispatché depuis votre composant ou ailleurs dans votre application.

3. À l'intérieur de `AddCartReducer`, vous avez une instruction switch qui vérifie `action.type`. Si `action.type` est `ADDCART`, la fonction retourne un nouvel objet d'état où la propriété `cart` est remplacée par le payload de l'action. Cela change effectivement l'état de `cart` dans votre magasin Redux.

4. Si `action.type` ne correspond à aucun des cas dans l'instruction switch, la fonction retourne l'état actuel sans modifications. C'est une pratique courante dans les reducers Redux et cela assure qu'une action qui n'est pas concernée par le reducer ne cause pas de changements d'état.

5. Enfin, `AddCartReducer` est exporté afin qu'il puisse être importé et utilisé pour créer votre magasin Redux.

Dans votre cas, lorsqu'une action `ADDCART` est dispatchée, la valeur de `cart` dans le magasin Redux serait mise à jour avec la valeur passée dans le payload de l'action. Ce reducer ignorerait tous les autres types d'actions. 

N'oubliez pas de suivre un schéma similaire lors de la création de votre `CounterReducer` pour gérer les actions `INCR` et `DECR`.