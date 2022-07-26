export enum ActionTypes{
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw",
    BANKRUT = "bankrut"
}

interface Deposit{
    type: ActionTypes.DEPOSIT;
    payload: number;
}
interface Withdraw{
    type: ActionTypes.WITHDRAW;
    payload: number;
}
interface Bankrut{
    type:ActionTypes.BANKRUT;
}
export type Action = Deposit | Withdraw | Bankrut