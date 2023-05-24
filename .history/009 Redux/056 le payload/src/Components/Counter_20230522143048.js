import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Counter() {

    const [cartData, setCartData] = useState(0);
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({
            type: "INCR"
        })
    }
    const decrFunc = () => {
        dispatch({
            type: "DECR"
        })
    }

    const addToCartFunc = () => {
        dispatch({
            type: "ADDCART",
            payload: cartData
        })
    }

    return (
        <div>
            <h1>Votre panier : {cart}</h1>   
            {/* <button onClick={decrFunc}>-1</button>
            <button onClick={incrFunc}>+1</button> */}
            <input 
            value={cartData}
            onInput={e => setCartData(e.target.value)}
            type="number"/>
            <br />
            <button onClick={addToCartFunc}>Ajouter au panier</button>
        </div>
    )
}

// Sur la base du code le plus récent que vous avez fourni, vous devez vous assurer que l'état
//  «CART» est correctement accessible depuis le magasin Redux. Après avoir combiné les réducteurs 
//  avec la fonction «CombinerEducers», l'état de chaque réducteur est imbriqué sous une clé
//   correspondant aux noms que vous avez fournis dans l'objet transmis à `combinairs».

// Vous devez remplacer `const Cart = useelector (state => state.cart)` par `const Cart = useelector 
// (state => state.cart.cart)`. Voici le composant «compteur» corrigé:

// `` JSX
// Importer React, {UseState} de 'react'
// import {useSelector, usesispatch} à partir de 'react-redux'

// Exporter la fonction default compter () {

//      const [cartdata, setCartData] = UseState (0);
//      const Cart = useylector (state => state.cart.cart)

//      const Dispatch = usedispatch ();

//      const incolfunc = () => {
//          expédition({
//              Type: "incr"
//          })
//      }
//      const de décrfunc = () => {
//          expédition({
//              Type: "diminuant"
//          })
//      }

//      const addtocartfunc = () => {
//          expédition({
//              Type: "addcart",
//              charge utile: Cartdata
//          })
//      }

//      retour (
//          <div>
//              <h1> vote Panier: {CART} </h1>
//              {/ * <Button onClick = {décrfunc}> - 1 </futton>
//              <Button onClick = {incrfunc}> + 1 </futton> * /}
//              <entrée
//              valeur = {cartdata}
//              onInput = {e => setcartData (e.target.value)}
//              type = "nombre" />
//              <br />
//              <Button onClick = {addToCartFunc}> ajouter au panier </ / bouton>
//          </div>
//      )
// }
// `` '

// Veuillez noter que les méthodes `` incrfunc 'et «décrfunc» ne sont actuellement pas utilisées.
//  Si vous n'en avez pas besoin, vous pouvez les supprimer. De plus, la charge utile de l'action
//   «addcart» devrait être un nombre. Veuillez vous assurer que «Cartdata» est converti en nombre 
//   avant d'envoyer l'action.