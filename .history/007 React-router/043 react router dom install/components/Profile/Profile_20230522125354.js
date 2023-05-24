import React from "react";
import { useParams } from "react-router-dom";
`useParams` est un hook personnalisé de la bibliothèque `react-router-dom` en React.js. Un hook est
 une fonction qui vous permet d'utiliser les fonctionnalités de React, comme l'état et le cycle de 
 vie, dans les composants fonctionnels. `useParams` est un hook qui permet de récupérer les paramètres
  de l'URL actuelle.
Par exemple, si vous avez une route définie comme `/profil/:id`, où `:id` est un paramètre dynamique,
 vous pouvez utiliser `useParams` pour récupérer la valeur actuelle de `:id`.

Voici un exemple d'utilisation de `useParams` :

```jsx
import { useParams } from 'react-router-dom';

function Profile() {
  let { id } = useParams();

  return (
    <div>
      <h2>Profil ID: {id}</h2>
    </div>
  );
}
```

Dans cet exemple, si l'utilisateur navigue vers `/profil/123`, le composant `Profile` affichera "Profil ID: 123". Si l'utilisateur navigue vers `/profil/abc`, le composant affichera "Profil ID: abc". Dans chaque cas, `useParams` est utilisé pour récupérer la valeur actuelle de `:id`.


export default function Profile() {
  return (
    <div>
        <h1>Bienvenue sur votre profil</h1>
    </div>
  )
}
