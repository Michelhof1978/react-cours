import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CounterReducer from './Reducers/CounterReducer'
import AddCartReducer from './Reducers/AddCartReducer'

const Store = createStore(AddCartReducer);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

Dans votre configuration actuelle, vous ne fournissez qu'un seul réducteur («addcartreducer») à 
votre magasin Redux. Si vous souhaitez utiliser plusieurs réducteurs (dans ce cas, `Counterreducer` 
et« addCartreducer »), vous devrez les combiner à l'aide de la fonction« CombineReducers »de Redux.

Voici un exemple:

`` JSX
import {Createstore, combinerDucers} à partir de "redux";
import {provider} de "react-redux";
Importer des contre-réducteurs de './reducers/counterreducer'
importer addCartreducer de './reducers/addcartreducer'

const rootReducer = combinationdUcers ({{{
   Comptoir: contre-inducteur,
   chariot: addcartreducer
})

const Store = CreateStore (rootReducer);

Reactdom.render (
   <Fournisseur store = {store}>
     <App />
   </purder>,
   document.getElementByid ("root")
));
`` '
Maintenant, les deux réducteurs sont inclus dans votre magasin Redux. Dans votre composant, vous 
accèderiez à l'état comme ceci:

`` JSX
const Count = useSelector (state => state.Counter.Count);
const Cart = useSelector (state => state.cart.cart);
`` '
En effet, «CombinerEducers» niche l'état de chaque réducteur sous une clé correspondant aux noms fournis dans l'objet qui lui est transmis.