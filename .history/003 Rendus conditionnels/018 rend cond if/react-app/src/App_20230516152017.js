//Ici, on affiche du contenu ou pas si c'est true ou false, on va montrer du contenu de façon conditionnel

import { useState } from "react";
import Item from "./Components/Item/Item";

function App() {
  const [toggle, setToggle] = useState(true);//création du state

  const changeState = () => {
    setToggle(!toggle);//Cela changera le true en false ou l inverse
  };

  let toggleContenu;

  if (toggle) {//Si toggle est true alors 
    toggleContenu = <h1>Le state est True</h1>;
  } else {
    toggleContenu = <h1>Le state est False</h1>;
  }


    return (
      {toggle ? 
      
      <div className="App">
        {toggleContenu}
        <button onClick={changeState}>Change state</button>
      </div>
      }
    );
  
}

export default App;
