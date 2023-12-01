import {combineReducers, legacy_createStore} from "redux";
import {reducer} from "./reducer";

// const rootReducer = combineReducers({
//     counter: reducer
// })


export const store = legacy_createStore(reducer);

export type AppRootStateType = ReturnType<typeof reducer>
