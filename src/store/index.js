import {reducer as formReducer} from 'redux-form'
import createSagaMiddleware from 'redux-saga';
import posts from "./reducers/posts";
import {applyMiddleware, combineReducers, createStore} from "redux";
import rootSaga from "./sagas/saga";

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers({
            posts,
            form: formReducer
        }),
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};