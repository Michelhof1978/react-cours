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
      //e.target.value = 
      />

    </div>
  );
}

export default App;
