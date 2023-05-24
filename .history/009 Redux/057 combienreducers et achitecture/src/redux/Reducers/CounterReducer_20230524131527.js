const INITIAL_STATE = {
    count: 50
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

1 Votre «contre-réducteur» semble correctement implémenté. C'est ce que fait votre réducteur:



2. `Counterreducer` est une fonction qui prend l'état actuel (ou le« initial_state »si l'état 
n'est pas défini) et une action.

3 - Si «Action.Type» est `` Régard », un nouvel état est retourné lorsque« Count »est incrémenté 
    de« 1 ».
   
    - Si «Action.Type» est «diminué», un nouvel état est retourné lorsque «le nombre» est décrémenté
    de «1».

4. Si «Action.Type» ne correspond pas à «RUP» ou à «diminuer», le réducteur renvoie l'état actuel 
non modifié. Cela garantit qu'une action non pertinente pour cette partie de l'État ne provoque 
aucun changement.

5. Le «contre-réducteur» est ensuite exporté pour une utilisation dans votre magasin.

Dans votre magasin Redux, le «nombre» augmentera ou diminuera de 1 chaque fois que des actions
 «augment» ou «diminution» sont expédiées, respectivement. Tous les autres types d'action seront 
 ignorés par ce réducteur.

Il semble que vous ayez le resserrement des réducteurs Redux! Si vous avez plus de questions ou
 avez besoin de clarifications supplémentaires, n'hésitez pas à demander.