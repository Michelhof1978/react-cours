import {useState, useEffect} from 'react'


function Timer() {

  const [timer, setTimer] = useState(1)

  useEffect(() => {

    const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

    return () => {
      alert('COMPOSANT DÉTRUIT !')
      clearInterval(intervalID);
    }

  }, [])


  return (
    <div className="App">
        <h1>{timer}</h1>
    </div>
  );
}

export default Timer;

Le composant `Timer` est un autre composant React qui crée un compteur qui s'incrémente toutes les 
secondes. Il utilise également le hook `useEffect` pour définir certaines actions qui se produisent 
lorsque le composant est monté et démonté.

```javascript
function Timer() {

  const [timer, setTimer] = useState(1)
```
Ici, l'état `timer` est initialisé à 1 avec l'aide du hook `useState`. `setTimer` est la fonction 
qui sera utilisée pour modifier la valeur de `timer`.

```javascript
  useEffect(() => {

    const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
```
`useEffect` est un autre hook de React qui est utilisé pour exécuter une fonction après chaque rendu de ce composant. Dans ce cas, la fonction crée un intervalle qui appelle `setTimer` chaque seconde, augmentant la valeur de `timer` de 1.

```javascript
    return () => {
      alert('COMPOSANT DÉTRUIT !')
      clearInterval(intervalID);
    }
```
La fonction de retour dans `useEffect` est appelée lors du démontage du composant. Cette fonction affiche une alerte avec le message "COMPOSANT DÉTRUIT !" et efface l'intervalle créé précédemment.

```javascript
  }, [])
```
L'array vide signifie que `useEffect` ne dépend d'aucune variable d'état ou de prop, et sera donc exécuté une seule fois, juste après le premier rendu du composant.

```javascript
  return (
    <div className="App">
        <h1>{timer}</h1>
    </div>
  );
}
```
Enfin, le rendu du composant `Timer` renvoie une balise div avec une classe "App", contenant une balise h1 qui affiche la valeur actuelle de `timer`. Cette valeur est mise à jour chaque seconde grâce à l'effet défini précédemment.

En somme, ce composant agit comme un compteur, et lorsqu'il est supprimé de l'interface utilisateur (démonté), il affiche une alerte et arrête l'incrémentation.