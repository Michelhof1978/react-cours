import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [dataImg, setDataImg] = useState();//Pour afficher une image, il va falloir le mettre ds du state

  useEffect(() => {

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      setDataImg(data[0].url)
    })

  }, [])//Tableau vide car on souhaite appeler qu'une seule fois l Api


  return (
    <div className="App">
        {dataImg && 
        <img src={dataImg}
        alt="cat image"
        style={{width: "500px"}}
        />}
    </div>
  );
}

export default App;
