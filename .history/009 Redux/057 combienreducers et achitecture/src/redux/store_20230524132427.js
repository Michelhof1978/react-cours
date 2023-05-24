import { createStore, combineReducers } from "redux";
import CounterReducer from './Reducers/CounterReducer'
import AddCartReducer from './Reducers/AddCartReducer'

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer
})

const store = createStore(rootReducer);

export default store;

1. Vous importez `createStore` et `combineReducers` de la bibliothèque Redux. `createStore` est
 une fonction qui génère un magasin Redux avec votre reducer racine, et `combineReducers` est une
  fonction utilitaire pour combiner vos différents reducers en un seul.

2. Vous importez `CounterReducer` et `AddCartReducer`, qui sont deux fichiers de reducers distincts. Un reducer est une fonction qui décide comment mettre à jour l'état en réponse à une action envoyée au magasin.

3. Vous créez `rootReducer` en utilisant `combineReducers`. Ceci fait en sorte que lorsqu'une action est dispatchée, `combineReducers` délègue la gestion de cette action au reducer spécifique en fonction de la clé que vous avez définie dans l'objet `combineReducers`. Dans votre cas, les clés sont `CounterReducer` et `AddCartReducer`.

4. Vous utilisez `createStore` pour créer le magasin Redux avec `rootReducer` comme argument. Le magasin est responsable de contenir l'état de l'application, de dispatcher les actions vers le reducer, et de permettre aux composants de s'enregistrer aux écouteurs via `subscribe`.

5. Enfin, vous exportez le `store` pour qu'il puisse être utilisé dans le reste de votre application.

Vous devrez fournir ce magasin à votre application en enveloppant votre composant principal d'application avec `Provider` de `react-redux` et en passant le magasin en tant que prop. Cela pourrait ressembler à cela :

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

N'oubliez pas de gérer les actions dispatchées (`"INCR"`, `"DECR"`, `"ADDCART"`) dans vos reducers (`CounterReducer`, `AddCartReducer`) de manière appropriée. Chaque reducer doit retourner un nouvel état en fonction de l'action qu'il reçoit.