import {useState, useEffect} from 'react'//Hooks,on mettra toujours un use avant le mot pour pouvoir bien repérer les hooks
import './App.css';

function App() {

  const [dataComponent, setDataComponent] = useState(1);

  useEffect(() => {//Le Hook useEffect() en React est un outil puissant qui permet d'exécuter du code sous certaines conditions, ou après que certaines choses se soient produites dans votre composant.

  });
  const changeState = () => {
    setDataComponent(dataComponent + 1)//Va incrémenter de 1
  }

  return (
    <div className="App">
    <h1>Le state est {dataComponent}</h1>  {/* Résultat Le state est 1 */}
    <button onClick={changeState}>Change State</button>
    {/* On fait appel à une fonction changeState et va incrémenter de 1 à chaque fois que l on clic sur bouton */}
    </div>
  );
}

export default App;
