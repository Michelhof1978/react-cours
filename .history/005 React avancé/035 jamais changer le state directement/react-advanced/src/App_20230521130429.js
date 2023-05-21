import { useState, useEffect, useRef } from "react";
import "./App.css";
//ON NE CHANGE JAMAIS DIRECTEMENT UN STATE

function App() {
  const [toggle, setToggle] = useState("abc");

  const toggleFunc = () => {
    const newArr = [...toggle];
    newArr.push(4);

    setToggle(newArr);
  };

  console.log("mise à jour");


  return (
    <div className="App">
      <h1>{toggle}</h1>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
