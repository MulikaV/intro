import * as axios from "axios";
import {reducer as formReducer} from 'redux-form'
import createSagaMiddleware from 'redux-saga';
import posts from "./reducers/posts";
import {createRequestInstance, watchRequests} from "redux-saga-requests";
import {createDriver} from "redux-saga-requests-axios";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";


function* rootSaga() {
    yield createRequestInstance({
        driver: createDriver(
            axios.create({
                baseURL: 'https://5e4aae066eafb7001488c7c7.mockapi.io'
            }),
        )
    });
    yield watchRequests();
};

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