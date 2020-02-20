import {reducer as formReducer} from 'redux-form'
import createSagaMiddleware from 'redux-saga';
import posts from "./posts/reducers";
import { requestsPromiseMiddleware } from 'redux-saga-requests';
import {applyMiddleware, combineReducers, createStore} from "redux";
import rootSaga from "./sagas/saga";

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers({
            posts,
            form: formReducer
        }),
        applyMiddleware(requestsPromiseMiddleware(),sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};