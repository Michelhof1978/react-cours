import { createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./Reducers/CounterReducer";
import AddCartReducer from "./Reducers/AddCartReducer";

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer,
});

const customMiddleware = store => next => action => {

    const actionModif = {
        type: "ADDCART",
        payload: 789
    }

   next(actionModif)

}


const store = createStore(rootReducer, applyMiddleware(customMiddleware));

export default store;


Votre code en français :

1. Vous importez les fonctions `createStore`, `combineReducers` et `applyMiddleware` de Redux, 
ainsi que vos reducers `CounterReducer` et `AddCartReducer`.

2. Ensuite, vous combinez vos reducers en un seul reducer racine (`rootReducer`) à l'aide de 
`combineReducers`. 

3. Vous définissez un middleware personnalisé `customMiddleware`. Ce middleware intercepte chaque
 action envoyée à votre store, et modifie cette action pour qu'elle soit de type `ADDCART` avec un 
 payload de `789`, peu importe l'action initiale. 

   Dans un middleware réel, vous voudriez probablement effectuer des opérations plus complexes, 
   comme une logique asynchrone ou des transformations d'action conditionnelles. Cependant, 
   ce code démontre le concept de base : un middleware peut inspecter, modifier, retarder ou ignorer
    les actions dispatchées.

4. Ensuite, vous créez votre store Redux en passant votre `rootReducer` et votre middleware 
personnalisé (enveloppé dans `applyMiddleware`) à `createStore`.

5. Enfin, vous exportez votre store pour l'utiliser ailleurs dans votre application.

Veuillez noter que la modification de toutes les actions en une seule action spécifique, comme dans cet exemple, est probablement une mauvaise idée dans une application réelle. C'est juste un exemple pour illustrer comment un middleware peut modifier les actions. Dans la pratique, vous devriez utiliser un middleware pour effectuer des tâches utiles, comme gérer les actions asynchrones, logger les actions et l'état, ou conditionnellement transformer certaines actions.