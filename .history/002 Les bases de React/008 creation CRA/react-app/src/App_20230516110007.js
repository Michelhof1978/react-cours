//COMPOSANT
//Le state sont les données des composants
//Pas besoins d importer React seul, on import uniquement les méthode utilisés comme useSatte par exemple
import Item from './COMPONENTS/Item' 
import {useState} from 'react'//On importe useState de la librairie react pour pourvoir stocker et utiliser  des données
import './index.css'
function App() {//Cette fonction est un composant
  
  // console.log(useState());
// --------------------
  const [monState, setMonState] = useState(10);//setMonState , c'est ce qui est retourné de useState dont la valeur de 10/ On appelle cela du destructuring, ici on crée une constante entre crochets à partir de ce que retourne useState en tableau monState à l index 0 et setMonState à l'index 1, à noter que les 2 index du tableau, on peut les nommer comme on veut, juste mettre set pour indiquer un changement ou une mise en place
  // console.log(monState);
    //Si on mets entre la parenthèses monState, il retournera 10 mais si on mets setMonState, il retournera une fonction
    // Ce code utilise React pour créer une variable d'état (state) appelée "monState" avec une valeur initiale de 10.
    //  La fonction `useState` est une fonction de crochet (hook) fournie par React qui permet de gérer l'état dans 
    //  les composants fonctionnels. Lorsque vous appelez `useState(10)`, la fonction `useState` retourne un tableau 
    //  avec deux éléments. Le premier élément, "monState", est la variable qui représente l'état et qui contient la
    //   valeur actuelle. Le deuxième élément, "setMonState", est une fonction qui permet de mettre à jour la valeur 
    //   de l'état.En utilisant la syntaxe de décomposition (destructuring) de JavaScript, la première ligne extrait
    //    les deux éléments du tableau retourné par `useState` et les assigne aux variables correspondantes.
    // Ensuite, la ligne suivante affiche la fonction `setMonState` dans la console. Cette fonction est utilisée pour 
    // modifier la valeur de "monState" ultérieurement.En résumé, ce code initialise une variable d'état "monState"
    //  avec une valeur de départ de 10 et extrait la fonction "setMonState" qui permet de mettre à jour cette valeur.
    //   La ligne suivante affiche cette fonction dans la console.
// ----------------------
    // const modifyState = () => {  //On crée la fonction pour l'événement oneClick du bouton ci dessous
     
    //   setMonState(20);//Permet de modifier le contenu, en modifiant la valeur à 20 au lieu de 10
   
    //Le composant va se mettre à jour lors du clic et passera de 10 à 20
//--------------------------------------------
    const modifyState = (data) => {//On fait passer cette fonction <Item func={modifyState} /> ci dessous
      setMonState(data);
      // console.log(data);
    }
//----------------------------------------------
    return (

      <div className="App">  {/* Ce n est pas du html mais du jsx, ici on ne mets pas class mais className pour du jsx*/}
      
      <h1>Hello state : {monState} </h1> {/*on affiche les données du state ds le conposant App*/}
     
      {/* <button onClick={modifyState}>Change state</button> On ajoute un événement au bouton, par contre en jsx, on rajoute on suivi de la majuscule, entre les accolades, on attents une fonction ici modifyState */}
     
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio at pariatur ab nulla, </p>
      
      <Item txt={"Hello word depuis Item"} />  {/*On récupére le composant Item de Item.js */}
      <Item number={monState} />{/*On peut nommer les Items comme on veut*/}
      <Item txt={"Hello word Italie"} />{/*On peut afficher plusieurs messages avec le même composant Item*/}
     
     <Item func={modifyState} />
    </div>
  );

  //AUTRE FACON DE FAIRE LE CODE CI DESSUS MAIS BEAUCOUP MOINS COMPREHENSIBLE CE N EST PAS DU JSX MAIS DU JS
  // return React.createElement(
  //   'div',
  //   {className: 'App'},
  //   React.createElement('h1', null,
  //   'Hello')
  // )
}

export default App;
gi
