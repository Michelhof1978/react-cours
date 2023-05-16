import {useState} from 'react'
import './Item.css'
import photoCvBusiness from './photoCvBusiness.png'

//Creation d un composant pour soit affichage, faire un calcul, appel à des APIS ou de la logique ..., lors de la création du fichier, on mets une majuscule au debut du nom de fichier par convention
function Item(props){//On crée un composant avec la propriété props qui vient d'un parent et cela va nous retourner un objet avec des propriétés qui lui sera donné par l élément parent qui est App.js ds ce cas là
    
    const [itemState, setItemState] = useState('Item State !!!!!!!!!')//Fonction qui va être utiliser au bouton ci dessous
    //Code pour remonter le state de l enfant à parent
    //------------------------
    //console.log(props);//Indiquer props ds les paramètre, c'est mieux

    //-----------------------
    const toggle = true;
    // Pour modification css ci dessous
    // -------------------------

    // Autre façon de faire avec le css:
    // const styleCss = {color: toggle ? 'red' : 'green'}
    // On appelera la constante {styleCss} ds le style du h1
    //-----------------------
    
    return (//Quand on retour du jsx, il faut le retourner en bloc important!!!
   
   <div> 
        {/* On met une div qu on appelle un bloc lorsqu il y a plusieurs lignes de codes */}

    <h1 style={{color: toggle ? 'red' : 'green', fontSize: '50px'}}>{props.txt}</h1> 
    {/* Pour le css, utiliser le camelCase, on vient de faire une condition ternaire par rapport à la variable 
    toggle: si c'est faux, on passe au vert et si c'est vrai, au rouge// De préférence faire le css ds un fichier séparé Item.css, ne pas oublier d importer le fichier pour que le css s execute*/}
    <h1>{props.number}</h1>
    {/*On veut que les Item props.txt affiché ds l élément parent App.js soient en H1
    /Pas besoins de mettre des paranthèses pour return quand il y a qu'un seul élément */}

{/* ---------------------------------- */}
     {/* // return <h2>{props.number}</h2> */}
{/* ---------------------------------------- */}

     {/* <button onClick={props.func}>Change state</button>  */}
{/* ------------------------ */}

     <button onClick={() => props.func(itemState)}>Change state</button> {/* //Ici, on a réussi à remonter et afficher le state à l élément enfant à l'élément parent.
     {/* On ajoute un événement au bouton, par contre en jsx, on rajoute on suivi de la majuscule, entre les accolades, on attents une fonction ici modifyState */}
    {/* La fonction anonyme sera executer uniquement lors du clic sur bouton et va retourner props.func(itemState) qu on reçoit ci dessus*/}

{/* ------------------------ */}
<img src={'https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg'} alt=''/>
<img src={photoCvBusiness} alt=''/>{/* On importe la photo en la déclarant ci dessus */}

{/* Bien mettre des accolades pour le src */}
{/* ------------------------ */}

    </div>
)}

export default Item; //Toujours exporter le composant et on va par la suite l importer ds App.js, pas besoin de mettre le .js, react détecte automatiquement