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
      <Route path='/profile' element={<Profile />}/> 
      
     </Routes>
    </div>
  );
}

export default App;
