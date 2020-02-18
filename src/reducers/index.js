import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import posts from "./posts";

const store = createStore(combineReducers({
    posts,
    form: formReducer
}),applyMiddleware(thunkMiddleware));

export default store;