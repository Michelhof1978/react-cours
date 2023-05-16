//CHANGEMENT DU STATE LORSQUE L ON ECRIT DS UN INPUT

import {useState} from 'react'
import Item from './Components/Item/Item'

function App() {

  const [inputData, setInputData] = useState(10);// ON crée un state, on le nomme comme on veut comme inputData
//Au début de la fonction, useState est utilisé pour créer un état local nommé inputData avec une 
//valeur initiale de 10. Cela signifie que inputData sera le nom de la variable qui stockera la 
//valeur du champ de saisie, et setInputData sera la fonction utilisée pour mettre à jour cette valeur.
 
const changeInput = (e) => {//Sera déclenché grâce à l événement onInput ci dessous dés que l on écrit ds le input
    // console.log(e);
    setInputData(e)
  }//Ensuite, la fonction changeInput est définie. Elle prend un argument e, qui représente l'objet 
  // Event de l'événement "input" déclenché lorsque l'utilisateur saisit ou modifie la valeur du champ 
  // de saisie. Cette fonction met à jour la valeur de inputData en utilisant setInputData avec la 
  // valeur actuelle du champ de saisie (e).

  console.log(inputData);

  return (
    <div className="App">

      <h1>Hello depuis App</h1>
      <input 
      type="text"
      value={inputData}//associe la valeur du champ de saisie à l'état inputData. Cela signifie que la valeur affichée dans le champ de saisie sera toujours égale à la valeur actuelle de inputData.
      onInput={e => changeInput(e.target.value)}//Tout input a un évévement, ici, c'est l événement onInput, il sera déclenché à chaque fois que l on écrit ds un input
      //e.target.value =  accéder à la valeur actuelle du champ de saisie lors de l'événement "input". 
      // //définit le gestionnaire d'événements "input". À chaque fois que l'utilisateur saisit ou 
      // modifie la valeur du champ de saisie, cette fonction sera appelée avec la valeur actuelle du 
      // champ de saisie (e.target.value) en tant que paramètre. Cela déclenchera la fonction 
      // changeInput qui mettra à jour inputData avec cette valeur.
      />

    </div>
  );
}
// //En résumé, ce composant React affiche un champ de saisie contrôlé qui met à jour l'état inputData 
// à chaque fois que l'utilisateur saisit ou modifie la valeur. La valeur actuelle de inputData est 
// également affichée dans la console à chaque mise à jour.

export default App;

// // L'expression `e.target.value` est utilisée pour accéder à la valeur actuelle d'un élément HTML 
// dans un événement JavaScript.
// // Voici ce que chaque partie de `e.target.value` signifie :

// // - `e` : C'est généralement la variable utilisée pour représenter l'objet Event qui contient des 
// informations sur l'événement déclenché. Dans le contexte de cet exemple, `e` fait référence à 
// l'objet Event de l'événement "input".

// // - `target` : C'est une propriété de l'objet Event qui représente l'élément HTML sur lequel 
// l'événement s'est produit. Dans ce cas, `target` fait référence à l'élément `<input>` sur lequel 
// l'utilisateur saisit ou modifie la valeur.

// // - `value` : C'est une propriété de l'élément HTML qui représente la valeur actuelle de cet 
// élément. Dans le contexte du champ de saisie `<input>`, `value` représente la valeur textuelle 
// saisie ou modifiée par l'utilisateur.

// // Ainsi, `e.target.value` combine ces éléments pour accéder à la valeur actuelle du champ de saisie 
// // lors de l'événement "input". Cela permet de récupérer la valeur saisie par l'utilisateur et de
// //  l'utiliser dans le code JavaScript, par exemple pour la stocker dans un état, effectuer des calculs
// //   ou effectuer des actions spécifiques en fonction de cette valeur.