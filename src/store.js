
import {createStore,combineReducers} from "redux"
import todos from "./reducer/todo"


const rootReducer = combineReducers({todos})

const Store =createStore(rootReducer)

export default Store;