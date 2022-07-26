import {Action, ActionTypes} from "../actions-types/index"
const initilState = 0;
const reducer = (state:number = initilState, action: Action) => {
    switch(action.type){
        case ActionTypes.DEPOSIT:
            return state + action.payload;
        case ActionTypes.WITHDRAW: 
            return state -action.payload;
        case ActionTypes.BANKRUT:
            return 0;
        default:
            return state;
    }
}
export default reducer;