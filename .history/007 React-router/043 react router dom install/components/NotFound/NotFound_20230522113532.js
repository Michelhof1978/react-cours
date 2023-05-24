import React from "react";
import { useNavigate } from "react-router-dom";



export default function NotFound() {//Pour affichage, érreur 404
    const navigate = useNavigate()

  return (
    <div>
        <h1>Oups, cette page n existe pas</h1>
        <button onClick={()}>Retourner à l accueil</button>
    </div>
  )
}
