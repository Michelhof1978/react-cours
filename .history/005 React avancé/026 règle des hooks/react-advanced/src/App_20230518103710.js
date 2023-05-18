import {useState, useEffect} from 'react'//Hooks,on mettra toujours un use avant le mot pour pouvoir bien repérer les hooks
import './App.css';

function App() {

  const [dataComponent, setDataComponent] = useState(1);

  return (
    <div className="App">
    <h1>Le state est {dataComponent}</h1>  {/* Résultat Le state est 1 */}
    <button></button>
    </div>
  );
}

export default App;
