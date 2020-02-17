import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'

const store = createStore(combineReducers({
    form: formReducer
}));
export default store;