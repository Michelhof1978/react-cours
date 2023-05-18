import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [dataImg, setDataImg] = useState();//Pour afficher une image, il va falloir le mettre ds du state

  useEffect(() => {

    fetch('https://api.thecatapi.com/v1/images/search')//On fait appel à l api grâce à fetch
    .then(response => {//Alors si succés, on va pouvoir loger la réponse http
      console.log(response);//Si réponse reçu
      return response.json();//On reçoit la reponse http et on transforme le http sous format json, va retourner un tableau avec un object dedans
    })
    .then(data => {
      console.log(data);
      setDataImg(data[0].url)//Endroit où l image sera affiché à l index 0 sous forme d url
    })

  }, [])//Tableau vide car on souhaite appeler qu'une seule fois l Api si on oubli le tableau, cela ferais une boucle infini


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

//Ce code utilise React pour afficher une image de chat récupérée depuis une API (The Cat API).
Voici une explication détaillée du code :

1. `const [dataImg, setDataImg] = useState();`: On utilise ici le Hook `useState` de React pour 
créer une variable d'état `dataImg`. Cette variable stocke l'URL de l'image de chat que nous 
récupérons de l'API. La fonction `setDataImg` est utilisée pour mettre à jour cette variable.

2. `useEffect(() => { ... }, [])`: Le Hook `useEffect` est utilisé pour exécuter le code dans la 
fonction dès que le composant est monté pour la première fois. C'est parce que nous avons passé un 
tableau vide `[]` comme second argument à `useEffect`, ce qui signifie que le code ne sera exécuté 
qu'au montage initial du composant, et pas lors des mises à jour ultérieures.

3. `fetch('https://api.thecatapi.com/v1/images/search')`: Ici, nous utilisons la fonction `fetch` pour faire une requête à l'API qui nous donne une image de chat aléatoire.

4. `.then(response => { return response.json(); })`: Après avoir reçu la réponse de l'API, nous la convertissons en format JSON, car c'est le format que l'API nous renvoie.

5. `.then(data => { setDataImg(data[0].url) })`: Une fois que la réponse est convertie en JSON, nous prenons l'URL de l'image de chat (qui est stockée à `data[0].url`) et nous l'attribuons à notre variable d'état `dataImg` en utilisant la fonction `setDataImg`.

6. Ensuite, dans la partie de rendu du composant (la fonction `return`), nous vérifions si `dataImg` est défini grâce à `{dataImg && ...}`. Si `dataImg` est défini, alors nous affichons une balise `img` avec l'URL de l'image de chat comme source (`src={dataImg}`).

En résumé, ce code affiche une image de chat aléatoire à partir de l'API The Cat API chaque fois que le composant est chargé.