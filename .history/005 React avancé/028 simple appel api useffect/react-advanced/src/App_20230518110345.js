import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [dataImg, setDataImg] = useState();//Pour afficher une image, il va falloir le mettre ds du state

  useEffect(() => {

    fetch('https://api.thecatapi.com/v1/images/search')//On fait appel à l api grâce à fetch
    .then(response => {//Alors si on reçoit une réponse
      console.log(response);//Si réponse reçu, on affiche
      return response.json();//On reçoit la reponse sous format json
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
