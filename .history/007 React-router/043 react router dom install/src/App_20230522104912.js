import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={Home}>{/* path = chemin// element = composant */}

      </Route>

     </Routes>
    </div>
  );
}

export default App;
