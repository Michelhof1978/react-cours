import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile/Profile';

function App() {
  return (
    <div className="App">
     <Routes>

      <Route path='/' element={<Home />}/>      {/* path = chemin// element = composant */}
      <Route path='/profil/:id' element={<Profile />}/> //Cette route pourra grâce à son id présenter plusieurs route à plusieurs administrateur
      
     </Routes>
    </div>
  );
}

export default App;
