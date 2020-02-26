import {reducer as formReducer} from 'redux-form'
import createSagaMiddleware from 'redux-saga';
import postReducer from "./posts/reducers";
import authReducer from "./auth/reducers";
import {applyMiddleware, combineReducers, createStore} from "redux";
import rootSaga from "./sagas/saga";
import thunkMiddleware from 'redux-thunk'
import {requestsPromiseMiddleware} from "redux-saga-requests";

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers({
            posts: postReducer,
            auth:authReducer,
            form: formReducer
        }),
        applyMiddleware(requestsPromiseMiddleware({auto:true}),thunkMiddleware,sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};