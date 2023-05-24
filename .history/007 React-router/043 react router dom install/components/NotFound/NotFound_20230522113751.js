import React from "react";
import { useNavigate } from "react-router-dom";



export default function NotFound() {//Pour affichage, érreur 404
    const navigate = useNavigate()

  return (
    <div>
        //Utile si on ne trouve pas la page souhaité
        <h1>Oups, cette page n existe pas</h1>
        <button onClick={() => navigate("/")}>Retourner à l accueil</button>
        {/* //En cliquant sur le bouton, on nous redirige vers le chemin choisi grâce à navigate */}
    </div>
  )
}
