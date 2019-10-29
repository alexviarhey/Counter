import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";


let reducers = combineReducers({
       counter: counterReducer
});

let store = createStore(reducers);

window.store = store;
export default store
