import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile/Profile';
import NotFound from '../components/NotFound/NotFound';
import NavBar from '../components/NavBar/NavBar';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import development from '../components/Services/development/development';
import CyberSecurity from '../components/Services/CyberSecurity/CyberSecurity';

function App() {
  return (
    <div className="App">
      <NavBar/>

     <Routes>

      <Route path='/' element={<Home />}/>      {/* path = chemin// element = composant */}
      <Route path='/profil/:id' element={<Profile />}/> 
      {/* //Cette route pourra grâce à son id (on peut lui donner le nom que l on veut) présenter plusieurs routes à plusieurs administrateurs */}
      <Route path='*' element={<NotFound/>}/> 
     
      <Route path='/services' element={<Services />}/>  

        <Route path='/services/development' element={<development/>}/>  {/* Route imbriqué ds une autre route */}
        <Route path='/services/cybersecurite' element={<CyberSecurity/>}/>  {/* Route imbriqué ds une autre route */}
   </Route>
   
      <Route path='/contact' element={<Contact />}/>  

     </Routes>
    </div>
  );
}

export default App;

// `<Route path='/profil/:id' element={<Profile />}/>` est une ligne de code qui utilise la bibliothèque
//  de routage `react-router-dom` en React.js. Voici une explication détaillée de chaque partie :

// - `<Route />` est un composant de React Router qui permet de définir les différentes "routes" 
// (chemins) dans votre application. Il sert à rendre différents composants en fonction de l'URL 
// actuelle.

// - `path='/profil/:id'` est une prop qui définit le chemin pour ce Route spécifique. Dans ce cas, le 
// chemin est `/profil/:id`. Le `:id` est un paramètre de chemin dynamique. Cela signifie que cette 
// route correspondra à n'importe quel chemin qui suit le modèle `/profil/quelquechose`. Par exemple,
//  `/profil/123` ou `/profil/abc` correspondraient à cette route.

// - `element={<Profile />}` est une autre prop qui dit à React Router quel composant doit être rendu 
// lorsque l'URL correspond au chemin défini. Dans ce cas, lorsque l'URL correspond à `/profil/:id`, 
// le composant `Profile` est rendu.

// Donc en résumé, cette ligne de code signifie : "Lorsque l'URL correspond à `/profil/:id`, où `:id`
//  peut être n'importe quelle chaîne, alors affiche le composant `Profile`".