import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import P
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />}/>      {/* path = chemin// element = composant */}

      

     </Routes>
    </div>
  );
}

export default App;
