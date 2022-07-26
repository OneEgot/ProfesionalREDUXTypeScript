import {combineReducers} from "redux";
import bankReducers from "./bankReduser";

const reducer = combineReducers({
    bank:bankReducers
})
export default reducer;
export type State = ReturnType<typeof reducer>