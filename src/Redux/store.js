import { lginReducer } from "./LogInReducer/lginReducer";

let { createStore, combineReducers } = require("redux");





let rootReducer = combineReducers({
    LoginSTT : lginReducer
})





export let store = createStore(rootReducer)