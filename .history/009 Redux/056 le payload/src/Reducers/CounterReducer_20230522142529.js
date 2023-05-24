const INITIAL_STATE = {
    count: 0
}

function CounterReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'INCR': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'DECR': {
            return {
                ...state,
                count: state.count - 1
            }
        }
    }


    return state;
}

export default CounterReducer;

Il semble que vous n'incluez pas le cas par défaut dans l'instruction Switch dans votre réducteur. Le cas par défaut doit renvoyer l'état actuel si le type d'action ne correspond à aucun cas. Voici comment modifier votre réducteur:

`` JSX
const initial_state = {
     Count: 0
}

Fonction contre-inducteur (state = initial_state, action) {

     switch (action.type) {
         cas 'incr': {
             retour {
                 ...État,
                 Compte: State.Count + 1
             }
         }
         case 'dimin': {
             retour {
                 ...État,
                 Count: State.Count - 1
             }
         }
         défaut: {
             État de retour;
         }
     }
}

Exporter contre-réducteur par défaut;
`` '
Dans ce réducteur mis à jour, si une action est envoyée qui ne correspond pas à «augmenter» ou à 
«diminuer», le réducteur renverra l'état existant. Cela garantit que votre réducteur renvoie 
toujours un état défini.