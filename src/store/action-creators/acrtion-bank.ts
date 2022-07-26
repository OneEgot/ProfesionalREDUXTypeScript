import { Dispatch } from "redux";
import { ActionTypes, Action } from "../actions-types";

export const deposit = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.DEPOSIT,
            payload:amount
        })
    }
}
export const withdraw = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.WITHDRAW,
            payload:amount
        })
    }
}
export const bankrut = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.BANKRUT,
        })
    }
}