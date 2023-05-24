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

Il s'agit d'une fonction réductrice simple pour un magasin Redux. Voici ce qui se passe dans cette
 fonction:

1. La constante `initiale_state` est un objet qui définit l'état initial de cette tranche du magasin Redux. Cette tranche a une propriété, «Count», initialisée à «0».

2. Le «contre-réducteur» est une fonction réductrice. Il reçoit deux paramètres: l'état actuel (avec une valeur par défaut de «initial_state» si `State» est «Undefined»), et «l'action» qui a été envoyée.

3. À l'intérieur de «contre-réducteurs», il utilise une instruction «Switch» pour gérer différents types d'actions. Pour l'action `incr`, il renvoie un nouvel objet d'état avec le« Count »incrémenté de 1. Pour l'action« Dimin », il renvoie un nouvel objet d'état avec le« Count »décrémenté de 1. Notez qu'il utilise la propagation Opérateur («... State» pour copier toutes les autres propriétés de l'état actuel, qui est un modèle commun pour mettre à jour l'état de manière immuable.

4. Si le `` ACTION.TYPE 'n'est pas `` INCR' ou 'DIV', le réducteur renvoie simplement l'état actuel inchangé.

Ce réducteur gère la logique de la mise à jour du «nombre» dans le magasin Redux lorsque les actions sont expédiées. Lorsqu'une action «incr» est envoyée, le compteur est incrémenté. Lorsqu'une action «diminution» est envoyée, le compteur est décrémenté.

N'oubliez pas que dans Redux, les actions sont des objets simples qui doivent avoir un champ de type «type» et peuvent éventuellement avoir des champs de données supplémentaires. Par exemple, vous pouvez envoyer une action comme ceci: `{type: 'augmen'}`.

Le «contre-réducteur» est ensuite exporté afin qu'il puisse être utilisé pour créer le magasin Redux.