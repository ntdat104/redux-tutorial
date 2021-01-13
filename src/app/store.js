import { combineReducers, createStore } from "redux";
import counterReducer from "../features/counter/counterReducer";
import todoReducer from "../features/todo/todoReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    counter: counterReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;