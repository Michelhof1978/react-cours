import { createStore, combineReducers } from "redux";
import CounterReducer from './Reducers/CounterReducer'
import AddCartReducer from './Reducers/AddCartReducer'

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer
})

const store = createStore(rootReducer);

export default store;

Ce code fait partie de la configuration redux. Il fait ce qui suit:

1. Importation de «Createstore» et «CombinerEducers» de la bibliothèque Redux. 
«Createstore» est une fonction qui génère une boutique Redux avec votre réducteur racine et
 `combinée» est une fonction utilitaire pour combiner vos multiples réducteurs en un.

2. Importation de «contre-réducteurs» et «addcartreducer» qui sont deux fichiers réducteur
 distincts. Un réducteur est une fonction qui décide comment mettre à jour l'état en réponse à 
 toute action envoyée au magasin.

3. Création de «rootReducer» à l'aide de «combinairs». Cela fait en sorte que lorsqu'une action est envoyée, «CombinerEducers» déléguera le traitement de cette action au réducteur spécifique en fonction de la clé que vous avez définie dans l'objet `CombinerDucers». Dans votre cas, les clés sont «contre-réducteurs» et «addcartreducer».

4. Utilisation de «Createstore» pour créer le magasin Redux avec «rootReducer» comme argument. Le magasin est responsable de la maintenance de l'état de candidature, de la répartition des actions au réducteur et de l'autorisation des composants d'enregistrer les auditeurs via `sous-être.

5. Enfin, vous exportez le «magasin» afin qu'il puisse être utilisé dans le reste de votre application.

Vous devrez fournir ce magasin à votre application en enroulant votre composant d'application principal avec «Provider» de «React-Redux» et en passant le magasin en tant qu'hélice. Cela ressemblerait à ceci:

`` JSX
importer réagir à partir de «réagir»;
Importer Reactdom de «React-Dom»;
import {provider} de 'react-redux';
Importer un magasin à partir de './store';
Importer l'application à partir de './app';

Reactdom.render (
   <Fournisseur store = {store}>
     <App />
   </purder>,
   document.getElementByid ('root')
));
`` '

N'oubliez pas de gérer les actions réparties (`" augmen "`, `" diminuant "`, `" addcart "`) à l'intérieur de vos réducteurs («contre-réducteurs», `addcartreducer»). Chaque réducteur doit retourner un nouvel état en fonction de l'action qu'elle reçoit.