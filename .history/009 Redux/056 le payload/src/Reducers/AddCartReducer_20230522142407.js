const INITIAL_STATE = {
    cart: 0
}

function AddCartReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'ADDCART': {
            return {
                ...state,
                cart: action.payload
            }
        }
    }


    return state;
}

export default AddCartReducer;

// Je vois que vous avez fourni le code pour le contre-réducteur. C'est un bon début pour gérer l'état
//  lié à l'incrémentation et à la décrémentation d'une valeur de comptage. Juste une petite note -
//   c'est généralement une bonne pratique de gérer le cas par défaut dans votre instruction Switch 
//   dans Reducers Redux. Ce cas renverrait l'état actuel lorsqu'aucun type d'action correspondant
//    n'est trouvé:

// `` JSX
// const initial_state = {
//      Count: 0
// }

// Fonction contre-inducteur (state = initial_state, action) {
//      switch (action.type) {
//          cas 'incr': {
//              retour {
//                  ...État,
//                  Compte: State.Count + 1
//              }
//          }
//          case 'dimin': {
//              retour {
//                  ...État,
//                  Count: State.Count - 1
//              }
//          }
//          défaut:
//              État de retour;
//      }
// }

// Exporter contre-réducteur par défaut;
// `` '

// Dans ce réducteur mis à jour, si une action est envoyée qui ne correspond pas à «augmenter» ou 
// à «diminuer», le réducteur renverra l'état existant. Ceci est utile pour vous assurer que votre 
// réducteur renvoie toujours un état défini.