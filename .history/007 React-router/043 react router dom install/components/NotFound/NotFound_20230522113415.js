import React from "react";
import { useNavigate } from "react-router-dom";



export default function NotFound() {//Pour affichage, érreur 404
    const navigate =
  return (
    <div>
        <h1>Oups, cette page n existe pas</h1>
        <button>Retourner à l accueil</button>
    </div>
  )
}
