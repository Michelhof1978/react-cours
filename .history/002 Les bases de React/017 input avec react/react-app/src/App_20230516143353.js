//CHANGEMENT DU STATE LORSQUE L ON ECRIT DS UN INPUT

import {useState} from 'react'
import Item from './Components/Item/Item'

function App() {

  const [inputData, setInputData] = useState(10);// ON crée un state, on le nomme comme on veut comme inputData

  const changeInput = (e) => {//Sera déclenché grâce à l événement onInput ci dessous dés que l on écrit ds le input
    // console.log(e);
    setInputData(e)
  }

  console.log(inputData);

  return (
    <div className="App">

      <h1>Hello depuis App</h1>
      <input 
      type="text"
      value={inputData}
      onInput={e => changeInput(e.target.value)}//Tout input a un évévement, ici, c'est l événement onInput, il sera déclenché à chaque fois que l on écrit ds un input
      //e.target.value
      />

    </div>
  );
}

export default App;
