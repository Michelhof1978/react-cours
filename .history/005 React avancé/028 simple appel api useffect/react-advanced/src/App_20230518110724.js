import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [dataImg, setDataImg] = useState();//Pour afficher une image, il va falloir le mettre ds du state

  useEffect(() => {

    fetch('https://api.thecatapi.com/v1/images/search')//On fait appel à l api grâce à fetch
    .then(response => {//Alors si succés, on va pouvoir loger la réponse http
      console.log(response);//Si réponse reçu
      return response.json();//On reçoit la reponse http et on la  sous format json, va retourner un tableau avec un object dedans
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
