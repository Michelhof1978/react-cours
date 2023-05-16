//CHANGEMENT DU STATE LORSQUE L ON ECRIT DS UN INPUT

import {useState} from 'react'
import Item from './Components/Item/Item'

function App() {

  const [inputData, setInputData] = useState(10);// ON crée un state

  const changeInput = (e) => {
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
      onInput={e => changeInput(e.target.value)}//Tout input a un évévement 
      />
    </div>
  );
}

export default App;
