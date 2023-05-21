import {useState, useEffect} from 'react'
import './App.css';
import Timer from './Timer'

function App() {


  const [toggle, setToggle] = useState(true);


  const toggleFunc = () => {
    setToggle(!toggle)
  }//La fonction toggleFunc change l'état de toggle pour être l'opposé de ce qu'il est actuellement.
   Si toggle est true, l'appel à setToggle(!toggle) le mettra à false, et vice versa.
  Cette fonction est généralement utilisée pour contrôler l'état d'affichage de certaines parties 
  d'un composant, comme dans un composant de basculement (toggle), où vous voudriez montrer ou cacher
  quelque chose en fonction de l'état de toggle.
  La fonction toggleFunc pourrait être attachée à un événement, comme un clic sur un bouton, pour 
  changer l'état de toggle chaque fois que l'événement se produit.
  
  return (
    <div className="App">

        <button onClick={toggleFunc}>Toggle</button>
        //On clic sur le bouton pour pouvoir détruire le composant
        {toggle && <Timer />}
        {/* //Si toggle est true, j envoie le timer sinon, je renvoi rien */}
    </div>
  );
}

export default App;

// //Ce code est un exemple d'une application React qui utilise un composant "Timer" qui peut être 
// affiché ou masqué en cliquant sur un bouton. Voici ce que fait chaque partie du code :
// ```javascript
// function App() {
//   const [toggle, setToggle] = useState(true);
// ```
// Dans cette section, nous utilisons le Hook useState pour créer une variable d'état appelée "toggle"
//  et initialisée à true. La fonction "setToggle" est utilisée pour changer la valeur de "toggle".
// ```javascript
//   const toggleFunc = () => {
//     setToggle(!toggle)
//   }
// ```
// Ici, nous définissons une fonction appelée "toggleFunc". Lorsqu'elle est appelée, elle inverse la 
// valeur actuelle de "toggle" grâce à "setToggle". Si "toggle" était true, il devient false, et vice 
// versa.
// ```javascript
//   return (
//     <div className="App">
//         <button onClick={toggleFunc}>Toggle</button>
//         {toggle && <Timer />}
//     </div>
//   );
// }
// ```
// Dans le rendu JSX de notre composant, nous avons un bouton avec un écouteur d'événements "onClick"
//  attaché. Lorsque ce bouton est cliqué, il déclenche la fonction "toggleFunc", inversant la valeur 
//  de "toggle".
// Juste après le bouton, nous avons `{toggle && <Timer />}`. Ceci est une expression JavaScript qui
//  fonctionne comme une condition : si "toggle" est true, le composant "Timer" est rendu. Si "toggle" 
//  est false, rien n'est rendu.

// Donc, en résumé, chaque fois que vous cliquez sur le bouton, la valeur de "toggle" change, ce qui 
// fait que le composant "Timer" apparait ou disparait. C'est ce qu'on appelle un "toggle" ou 
// interrupteur.