import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [timer, setTimer] = useState(1)

  useEffect(() => {

    const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)//Incrémentation de 1 toutes les 1 seconds

    return () => {
      clearInterval(intervalID);
    }

  }, [])

  return (
    <div className="App">
        <h1>{timer}</h1>
    </div>
  );
}

export default App;

//Ce code est un exemple simple d'une application React qui implémente un compteur. Voyons de plus
 près ce que fait chaque partie du code.
```javascript
function App() {

  const [timer, setTimer] = useState(1)
```
Ici, nous définissons un état appelé "timer" initialisé à 1 avec la fonction "useState". "useState"
 est un Hook que nous utilisons pour ajouter l'état de React à notre fonction. La fonction "useState"
  renvoie un tableau avec deux éléments, et nous les déstructurons en deux constantes : "timer" et
   "setTimer". "timer" est la valeur actuelle de l'état, et "setTimer" est une fonction que nous 
   pouvons utiliser pour changer cette valeur.
```javascript
useEffect(() => {

    const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
```
"UseEffect" est un autre Hook de React que nous utilisons pour effectuer des effets secondaires dans
 notre composant. Dans ce cas, nous utilisons "setInterval" pour incrémenter notre "timer" toutes les
  secondes. "SetInterval" prend deux arguments : une fonction à exécuter et l'intervalle de temps en
   millisecondes entre chaque exécution de cette fonction. Donc dans ce cas, la fonction "setTimer" 
   est appelée toutes les secondes pour incrémenter la valeur de "timer".
```javascript
    return () => {
      clearInterval(intervalID);
    }
```
C'est la fonction de nettoyage de notre "useEffect". Cette fonction sera appelée quand le composant
 sera désinstallé. Elle est utilisée pour nettoyer tout effet secondaire que notre "useEffect" a créé.
  Dans ce cas, elle efface l'intervalle que nous avons créé avec "setInterval" en utilisant son ID.
```javascript
  }, [])
```
Les crochets vides à la fin de notre "useEffect" signifient que notre "useEffect" ne dépend d'aucune
 prop ou état, donc il sera exécuté une fois juste après le premier rendu du composant.
```javascript
  return (
    <div className="App">
        <h1>{timer}</h1>
    </div>
  );
}
```
Enfin, notre fonction "App" renvoie le JSX que nous voulons afficher. Dans ce cas, il s'agit d'une 
balise "div" avec une classe "App" qui contient une balise "h1" affichant la valeur actuelle de notre
 "timer". La valeur de "timer" sera actualisée chaque seconde grâce à notre "setInterval" dans "useEffect".
```javascript
export default App;
```

