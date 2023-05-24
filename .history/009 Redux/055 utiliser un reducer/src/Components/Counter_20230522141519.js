import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Counter() {

    const count = useSelector(state => state.count)

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

    return (
        <div>
            <h1>Les données : {count}</h1>   
            <button onClick={decrFunc}>-1</button>
            <button onClick={incrFunc}>+1</button>
        </div>
    )
}

// Il s'agit du composant `` Counter 'mis à jour avec deux fonctions supplémentaires - `incrfunc`
//  et` décrfunc` - qui utilisent le crochet `usedispatch` de` react-redux »pour expédier des actions
//   au magasin Redux. Voici comment cela fonctionne:

// 1. Le crochet `useelector` sélectionne le« Count »de l'état. Ce crochet prend une fonction qui 
// reçoit l'état du magasin Redux et renvoie les données sélectionnées de l'état. Dans ce cas, il 
// renvoie `State.Count '.

// 2. Le crochet `usedispatch` est utilisé pour obtenir la fonction` Dispatch` à partir du magasin 
// Redux. Cette fonction «Dispatch» est utilisée pour expédier des actions au magasin Redux.

// 3. La fonction `incrfunc 'envoie une action` incr` lorsqu'elle est appelée. La fonction «décrfunc» 
// envoie une action «diminution» lorsqu'elle est appelée.

// 4. À l'intérieur du JSX retourné, deux boutons sont ajoutés. Le premier, lorsqu'il est cliqué, 
// appellera le «décrag», en répartissant une action «diminution» et en décrémentant le compteur. Le second, lorsqu'il est cliqué, appellera le «incrfunc», envoyant une action `incr» et incrément le compteur.

// Cela vous permet d'incrémenter et de diminuer la valeur «Count» dans le magasin Redux à l'aide 
// des boutons du composant «Counter».