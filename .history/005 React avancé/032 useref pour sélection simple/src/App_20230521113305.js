//AFFICHAGE VIDEO AVEC REACT 

import { useState, useEffect, useRef } from "react";
import "./App.css";
import Video from "./Video.mp4";

function App() {
  const [toggle, setToggle] = useState(true);

  const ref = useRef([]);

  // console.log(ref);

  useEffect(() => {
    console.log(ref.current);
    setTimeout(() => {
      ref.current.pause();
    }, 3000);
  }, []);

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  const addToRef = (el) => {
    console.log(el);
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <div className="App">
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>

      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>

      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
